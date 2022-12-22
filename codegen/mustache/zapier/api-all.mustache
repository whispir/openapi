import { Bundle } from 'zapier-platform-core'
import { VERSION } from '../version';

export type InputBundle<T extends readonly Record<'key', any>[]> = Bundle<Record<T[number]['key'], any>>;

export const generateInputFields = (nestedInputData: any) => {
  return nestedInputData.flatMap(generateInputDataRecursive);
};

const FIELD_SEPARATOR = '__';
const updateData = (child, parent) => ({
  ...child,
  key: `${parent.key}${FIELD_SEPARATOR}${child.key}`,
  label: `${parent.label} ${child.label}`,
  required: parent.required,
});

const generateInputDataRecursive = (data) => {
  if (data.properties) {
    const newProps = data.properties.map((prop) => updateData(prop, data));
    return newProps.reduce((acc, cur) => [...acc, ...generateInputDataRecursive(cur)], []);
  } else if (data.children) {
    const newChildren = data.children.map((prop) => updateData(prop, data));
    return [{ ...data, children: newChildren }];
  } else {
    return [data];
  }
};

export const transformInputData = (input: any): any => {
  const output: any = {};

  for (const key in input) {
    if (key.includes(FIELD_SEPARATOR)) {
      let current = output;
      const subkeys = key.split(FIELD_SEPARATOR);
      for (const subkey of subkeys.slice(0, -1)) {
        let subcurrent = current[subkey];
        if (!subcurrent) {
          subcurrent = current[subkey] = {};
        }
        current = subcurrent;
      }

      if (Array.isArray(input[key])) {
        current[subkeys[subkeys.length - 1]] = input[key].map((item: any) => {
          const transformedItem: any = {};
          for (const subkey in item) {
            if (subkey.includes(FIELD_SEPARATOR)) {
              transformedItem[subkey.split(FIELD_SEPARATOR).slice(-1)[0]] = item[subkey];
            }
          }
          return transformedItem;
        });
      } else {
        current[subkeys[subkeys.length - 1]] = input[key];
      }
    } else {
      output[key] = input[key];
    }
  }

  return output;
}

export const addHeaders = (request, z, bundle) => {
  request.headers['X-API-KEY'] = bundle.authData.apiKey;
  request.headers.Authorization = `Basic ${Buffer.from(`${bundle.authData.username}:${bundle.authData.password}`).toString("base64")}`;
  request.headers['User-Agent'] = `whispir-zapier-${VERSION}`;
  return request;
};
