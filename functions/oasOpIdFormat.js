import { createRulesetFunction } from '@stoplight/spectral-core';
import { isPlainObject } from '@stoplight/json';

function isObject(value) {
  return value !== null && typeof value === 'object';
}

const validOperationKeys = ['get', 'post', 'put', 'delete'];
const CAMEL_CASE_REGEX = new RegExp(/^[a-z]+([A-Z][a-z]+)+$/);

function isCamelCase(str) {
  return CAMEL_CASE_REGEX.test(str);
}

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
  function oasOpIdFormat(input, options, context) {
    if (!isObject(input) || !isObject(input.paths)) return;

    const results = [];

    const { paths } = input;

    for (const { path, operation } of getAllOperations(paths)) {
      const pathValue = paths[path];

      if (!isObject(pathValue)) continue;

      const operationValue = pathValue[operation];

      if (!isObject(operationValue) || !('operationId' in operationValue)) {
        continue;
      }

      const { operationId } = operationValue;

      if (!isCamelCase(operationId)) {
        results.push({
          message: '"operationId" must be camelCased.',
          path: ['paths', path, operation, 'operationId'],
        });
      }

      if (operation === 'post' && !operationId.endsWith("Create")) {
        results.push({
          message: '"operationId" must end with "Create".',
          path: ['paths', path, operation, 'operationId'],
        });
      } else if (operation === 'put' && !operationId.endsWith("Update")) {
        results.push({
          message: '"operationId" must end with "Update".',
          path: ['paths', path, operation, 'operationId'],
        });
      } else if (operation === 'delete' && !operationId.endsWith("Delete")) {
        results.push({
          message: '"operationId" must end with "Delete".',
          path: ['paths', path, operation, 'operationId'],
        });
      } else if (operation === 'get' && path.endsWith("}") && !operationId.endsWith("Retrieve")) {
        // Paths that end with "}" have an ID as the last path parameter, and therefore refer to retrieving a single resource
        // when paired with a `GET` operation
        results.push({
          message: '"operationId" must end with "Retrieve".',
          path: ['paths', path, operation, 'operationId'],
        });
        // Paths that do not end with "}" have the resource name as the last path part, and therefore refer to retrieving a list of resources
        // when paired with a `GET` operation
      } else if (operation === 'get' && !path.endsWith("}") && !operationId.endsWith("List")) {
        results.push({
          message: '"operationId" must end with "List".',
          path: ['paths', path, operation, 'operationId'],
        });
      }
    }

    return results;
  },
);
