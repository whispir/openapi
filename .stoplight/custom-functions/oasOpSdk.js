import { createRulesetFunction } from '@stoplight/spectral-core';
import { isPlainObject } from '@stoplight/json';

function isObject(value) {
  return value !== null && typeof value === 'object';
}

const validOperationKeys = ['get', 'post', 'put', 'delete'];

function* getAllOperations(paths) {
  if (!isPlainObject(paths)) {
    return;
  }

  const item = {
    path: '',
    operation: '',
    value: null,
  };

  for (const path of Object.keys(paths)) {
    const operations = paths[path];
    if (!isPlainObject(operations)) {
      continue;
    }

    item.path = path;

    for (const operation of Object.keys(operations)) {
      if (!isPlainObject(operations[operation]) || !validOperationKeys.includes(operation)) {
        continue;
      }

      item.operation = operation;
      item.value = operations[operation];

      yield item;
    }
  }
}

export default createRulesetFunction(
  {
    input: null,
    options: {
      type: "object",
      additionalProperties: false,

      properties: {
        exceptions: {
          type: "array",

          items: {
            type: "string"
          }
        }
      }
    },
  },
  function oasOpSdk(input, options, context) {
    if (!isObject(input) || !isObject(input.paths)) return;

    const results = [];

    const { paths } = input;

    for (const { path, operation } of getAllOperations(paths)) {
      const pathValue = paths[path];

      if (!isObject(pathValue)) continue;

      const operationValue = pathValue[operation];

      if (!isObject(operationValue) || !('x-sdkOperation' in operationValue)) {
        continue;
      }

      const sdkOperation = operationValue['x-sdkOperation'];

      if (operation === 'post' && !sdkOperation.startsWith("create")) {
        results.push({
          message: '"x-sdkOperation" must start with one of: "create", "retrieve", "update", "delete", or "list", as appropriate.',
          path: ['paths', path, operation, 'x-sdkOperation'],
        });
      } else if (operation === 'put' && !sdkOperation.startsWith("update")) {
        results.push({
          message: '"x-sdkOperation" must start with one of: "create", "retrieve", "update", "delete", or "list", as appropriate.',
          path: ['paths', path, operation, 'x-sdkOperation'],
        });
      } else if (operation === 'delete' && !sdkOperation.startsWith("delete")) {
        results.push({
          message: '"x-sdkOperation" must start with one of: "create", "retrieve", "update", "delete", or "list", as appropriate.',
          path: ['paths', path, operation, 'x-sdkOperation'],
        });
      } else if (operation === 'get' && path.endsWith("}") && !sdkOperation.startsWith("retrieve")) {
        // Paths that end with "}" have an ID as the last path parameter, and therefore refer to retrieving a single resource
        // when paired with a `GET` operation
        results.push({
          message: '"x-sdkOperation" must start with one of: "create", "retrieve", "update", "delete", or "list", as appropriate.',
          path: ['paths', path, operation, 'x-sdkOperation'],
        });
      } else if (operation === 'get' && !path.endsWith("}") && !sdkOperation.startsWith("list")) {
        // Paths that do not end with "}" have the resource name as the last path part, and therefore refer to retrieving a list of resources
        // when paired with a `GET` operation
        results.push({
          message: '"x-sdkOperation" must start with one of: "create", "retrieve", "update", "delete", or "list", as appropriate.',
          path: ['paths', path, operation, 'x-sdkOperation'],
        });
      }
    }

    return results;
  },
);