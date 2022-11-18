# Whispir Node SDK PoC

## Running the generator

Ensure you have Java installed, it is required by the OAS generator. The easiest way to install is through Brew.
```bash
> brew install java
> sudo ln -sfn $(brew --prefix)/opt/openjdk/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk.jdk # symlink the Java runtime
```

Run the generator with the following steps:

```bash
> yarn # install yarn dependencies
> yarn download:oas # download the latest Whispir OAS file
> yarn generate # generate SDK from the OAS file
```

## Consuming the SDK

See [whispir-node-test package](../whispir-node-test/test.js) for a full example.

```js
const { MessagesApi } = require('whispir-api');

const sendMessage = (number) => {
  const messages = new MessagesApi('https://api.au.whispir.com');

  messages
    .postMessages(
      '<WORKSPACE_ID>',
      '<API_KEY>',
      'application/vnd.whispir.message-v1+json',
      'application/vnd.whispir.message-v1+json',
      {
        to: number,
        subject: `Hi there "${number}"`,
        body: `Hi there "${number}"`,
      },
      {
        headers: {
          Authorization: 'Basic <BASE_64_ENCODED_USERNAME_AND_PASSWORD>',
        },
      },
    )
    .then(({ response: { headers, statusCode } }) => {
      console.log({ headers, statusCode });
    });
};

sendMessage('<MOBILE_NUMBER>');
```

## References

* Whispir OpenAPI Spec: https://raw.githubusercontent.com/whispir/openapi/main/openapi.yaml
* OpenAPI Generator: https://openapi-generator.tech/
  * Typescript-node generator: https://openapi-generator.tech/docs/generators/typescript-node
  * Configuration options: https://openapi-generator.tech/docs/configuration/
  * Global options: https://openapi-generator.tech/docs/globals/
* Open-source research:
  * Xero: https://devblog.xero.com/building-sdks-for-the-future-b79ff726dfd6
    * Xero-OpenAPI Code Generator: https://github.com/XeroAPI/Xero-OpenAPI#code-generators
  * Spotify: https://github.com/thelinmichael/spotify-web-api-node
  * Ultimate API Publisher guide: https://medium.com/better-practices/the-ultimate-api-publishers-guide-be74a2692326
