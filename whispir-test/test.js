const dotenv = require('dotenv')
dotenv.config()

const WhispirClient = require('./WhispirClient')

const { API_URL, API_KEY, WHISPIR_USERNAME, WHISPIR_PASSWORD, WORKSPACE_ID } = process.env;
async function main() {
    const config = {
        username: WHISPIR_USERNAME,
        password: WHISPIR_PASSWORD,
        apiUrl: API_URL,
        workspaceId: WORKSPACE_ID,
        apiKey: API_KEY
    }
    const client = new WhispirClient(config)
    console.log(client.getCallbacks.toString())

    // return await client.getCallbacks()

    const sampleMessage = {
        to: '639911234567',
        subject: `Hi there Buddy`,
        body: `Hi there from Whispir"`,
    }
    // location: 'https://stage-ap-southeast-2.whispirdev.com/workspaces/26E4E27F0360A8C9/messages/1715282F3797523E',
    return await client.postMessages(sampleMessage)
    // return await client.getMessageById('1715282F3797523E')
}
main()
    .then(({ body, response: { headers } }) => {
        console.log('result', body, headers)
    })
    .catch(error => {
        console.error(error)
    })