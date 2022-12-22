import { VERSION } from './version';

export const authentication = {
    type: 'custom',
    test: (z, bundle) => {
        const options = {
            url: bundle.authData.host,
            headers: addHeaders({}, bundle),
            method: 'GET',
        };

        return z.request(options)
        .then((response) => {
          response.throwForStatus();
          const results = response.json;
      
          // You can do any parsing you need for results here before returning them
      
          return results;
        });
    },
    fields: [
      {
        key: 'host',
        type: 'string',
        required: true,
        helpText: 'Found in your browsers address bar after logging in.',
        choices: {
          'https://api.au.whispir.com': 'Australia',
          'https://api.ap1.whispir.com': 'Asia',
          'https://api.us.whispir.com': 'United States',
        }
      },
      {
        key: 'username',
        type: 'string',
        required: true,
        helpText: 'Used to login.',
      },
      {
        key: 'password',
        type: 'password',
        required: true,
        helpText: 'Used to login.',
      },
      {
        key: 'apiKey',
        type: 'password',
        required: true,
        helpText: 'Found on your settings page.',
      },
    ],
  };

export const addHeaders = (headers, bundle) => {
  headers['X-API-KEY'] = bundle.authData.apiKey;
  headers.Authorization = `Basic ${Buffer.from(`${bundle.authData.username}:${bundle.authData.password}`).toString("base64")}`;
  headers['User-Agent'] = `whispir-zapier-${VERSION}`;
  return headers;
};
