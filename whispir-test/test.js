import dotenv from 'dotenv'
dotenv.config()
import {
  MessagesApi as MessagesApiNode,
  AuthApi,
} from "../whispir-node/dist/api.js";

const { API_URL, API_KEY, WHISPIR_USERNAME, WHISPIR_PASSWORD, WORKSPACE_ID } = process.env;

(async () => {
  const sendMessageNode = (number) => {
    const messages = new MessagesApiNode(API_URL);

    messages
      .postMessages(
        WORKSPACE_ID,
        API_KEY,
        "application/vnd.whispir.message-v1+json",
        "application/vnd.whispir.message-v1+json",
        {
          to: number,
          subject: `Hi there "${number}"`,
          body: `Hi there "${number}"`,
        },
        {
          headers: {
            Authorization: `Basic ${Buffer.from(
              `${WHISPIR_USERNAME}:${WHISPIR_PASSWORD}`
            ).toString("base64")}`,
          },
        }
      )
      .then(({ response: { headers, statusCode } }) => {
        console.log({ headers, statusCode });
      })
      .catch(() => {
        console.log("Got an error");
      });
  };

  const generateAuthToken = () => {
    const auth = new AuthApi(WHISPIR_USERNAME, WHISPIR_PASSWORD, API_URL);

    // auth.setApiKey('ApiKeyAuth', API_KEY)
    // auth.defaultHeaders = {
    //   Accept: 'application/vnd.whispir.auth-v1+json',
    //   Authorization: `Basic ${Buffer.from(
    //     `${WHISPIR_USERNAME}:${WHISPIR_PASSWORD}`
    //   ).toString("base64")}`,
    // }
    return auth
      .postAuth(
        API_KEY,
        // undefined,
        {
          headers: {
            Accept: 'application/vnd.whispir.auth-v1+json',
            Authorization: `Basic ${Buffer.from(
              `${WHISPIR_USERNAME}:${WHISPIR_PASSWORD}`
            ).toString("base64")}`,
          },
        }
      )
      .then(({ response: { headers, statusCode, body } }) => {
        console.log('hello!')
        // console.log({ headers, statusCode, body });
      })
      .catch((error) => {
        console.log("Got an error", error);
      });
  };

  // sendMessageNode("61478107505");
  generateAuthToken();
})();
