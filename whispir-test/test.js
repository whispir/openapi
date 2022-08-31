import { MessagesApi as MessagesApiNode } from "../whispir-sdk-node/dist/api.js";

const { API_URL, API_KEY, USERNAME, PASSWORD, WORKSPACE_ID } = process.env;

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
              `${USERNAME}:${PASSWORD}`
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

  sendMessageNode("61478107505");
})();
