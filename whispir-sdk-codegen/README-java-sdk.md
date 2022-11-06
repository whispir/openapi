# Whispir Java SDK PoC

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

## Building Java SDK
Ensure that `gradle` is installed: See https://gradle.org/install/ for details

```bash
> cd whispir-java
> gradle build
```

## Running `whispir-test-java`
```bash
> cd whispir-test-java
> gradle run
```

## Consuming the SDK
See [whispir-test-java sample app](../whispir-test-java/app/src/main/java/whispir/test/java/App.java) for a full example.

### Creating API client
```java
import whispir_sdk_java.ApiClient;

client = new ApiClient();

String API_URL = '';
String WHISPIR_USERNAME = '';
String WHISPIR_PASSWORD = '';

client.setBasePath(API_URL);
client.setUsername(WHISPIR_USERNAME);
client.setPassword(WHISPIR_PASSWORD);
```

### Example Usage of Auth API

```java
public static void generateAuthToken() {
    ApiClient client = createClient();
    // initialize Auth API
    AuthApi authApi = new AuthApi(client);

    String API_KEY = '';
    try {
        // performs an Auth API post to request for token
        PostAuth200Response response = authApi.postAuth(
            API_KEY,
            "application/vnd.whispir.auth-v1+json",
            "application/vnd.whispir.auth-v1+json"
        );
        System.out.println(response);
    } catch (Exception e) {
        // TODO: handle exception
        System.out.println(e);
    }
}
```