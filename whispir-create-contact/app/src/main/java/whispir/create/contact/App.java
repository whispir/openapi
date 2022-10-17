/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package whispir.create.contact;

import whispir_sdk_java.ApiClient;

import org.whispir.api.AuthApi;
import org.whispir.api.MessagesApi;
import org.whispir.api.ContactsApi;
import org.openapitools.client.model.PostAuth200Response;
import org.openapitools.client.model.Message;
import org.openapitools.client.model.Contact;

import io.github.cdimascio.dotenv.Dotenv;

public class App {

    public String getGreeting() {
        return "Hello World!";
    }

    // creates an API client
    // setting up the API URL and Whispir username and password
    public static ApiClient createClient() {
        ApiClient client;
        client = new ApiClient();
        Dotenv dotenv = Dotenv.load();

        String API_URL = dotenv.get("API_URL");

        client.setBasePath(API_URL);
        client.setUsername(dotenv.get("WHISPIR_USERNAME"));
        client.setPassword(dotenv.get("WHISPIR_PASSWORD"));
        return client;
    }

    public static void generateAuthToken() {
        ApiClient client = createClient();
        // initialize Auth API
        AuthApi authApi = new AuthApi(client);
        Dotenv dotenv = Dotenv.load();
        try {
            // performs an Auth API post to request for token
            PostAuth200Response response = authApi.postAuth(
                    dotenv.get("API_KEY"),
                    "application/vnd.whispir.auth-v1+json",
                    "application/vnd.whispir.auth-v1+json");
            System.out.println(response);
        } catch (Exception e) {
            // TODO: handle exception
            System.out.println(e);
        }
    }

    public static void createContact(String firstName, String lastName, String workPhoneNumber, String workEmail, String country, String timezone) {
        ApiClient client = createClient();
        // initialize createContact API
        ContactsApi contactsApi = new ContactsApi(client);
        Contact contact = new Contact();
        Dotenv dotenv = Dotenv.load();
        ContactReturn contReturn = new ContactReturn();

        contact.firstName(firstName);
        contact.lastName(lastName);
        contact.workMobilePhone1(workPhoneNumber);
        contact.workEmailAddress1(workEmail);
        contact.workCountry(country);
        contact.timezone(timezone);

        try {

            Contact response = contactsApi.postContacts(
                    dotenv.get("WORKSPACE_ID"),
                    dotenv.get("API_KEY"),
                    "application/vnd.whispir.contact-v1+json",
                    "application/vnd.whispir.contact-v1+json",
                    contact);

            System.out.println(response);
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public static void sendMessage(String subject, String body) {
        ApiClient client = createClient();

        MessagesApi messageApi = new MessagesApi(client);
        Message message = new Message();
        ContactReturn contact = new ContactReturn();
        Dotenv dotenv = Dotenv.load();

        message.to(contact.getContactId());
        message.subject(subject);
        message.body(body);

        try {

            Message response = messageApi.postMessages(
                    dotenv.get("WORKSPACE_ID"),
                    dotenv.get("API_KEY"),
                    "application/vnd.whispir.message-v1+json",
                    "application/vnd.whispir.message-v1+json",
                    message);

            System.out.println(response);
        } catch (Exception e) {

            System.out.println(e);
        }

    }

    public static void main(String[] args) {
        System.out.println(new App().getGreeting());
        Dotenv dotenv = Dotenv.load();
        generateAuthToken();
        createContact(
                "TEst",
                "TEST123",
                "012345678",
                "test@email.com",
                "Australia",
                "Australia/Melbourne");
    }
}
