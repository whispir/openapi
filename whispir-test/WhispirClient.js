const dotenv = require('dotenv')
dotenv.config()
const {
    ActivitiesApi,
    CallbacksApi,
    ContactsApi,
    CustomListsApi,
    DistributionListsApi,
    EventsApi,
    ImportsApi,
    MessagesApi,
    ResourcesApi,
    ResponseRulesApi,
    ScenariosApi,
    TemplatesApi,
    WorkspacesApi,
    AuthApi,
} = require("../whispir-node/dist/api.js");

const { generateOperationTypes } = require('./openapi-parser')

class WhispirClient {
    // private auth;
    constructor(clientConfig) {
        const { username, password, apiUrl, workspaceId, apiKey } = clientConfig
        this.workspaceId = workspaceId
        this.apiKey = apiKey

        this.auth = new AuthApi(username, password, apiUrl);
        this.activitiesApi = new ActivitiesApi(username, password, apiUrl)
        this.callbacksApi = new CallbacksApi(username, password, apiUrl)
        this.contactsApi = new ContactsApi(username, password, apiUrl)
        this.customListsApi = new CustomListsApi(username, password, apiUrl)
        this.distributionListsApi = new DistributionListsApi(username, password, apiUrl)
        this.eventsApi = new EventsApi(username, password, apiUrl)
        this.importsApi = new ImportsApi(username, password, apiUrl)
        this.messagesApi = new MessagesApi(username, password, apiUrl)
        this.resourcesApi = new ResourcesApi(username, password, apiUrl)
        this.responseRulesApi = new ResponseRulesApi(username, password, apiUrl)
        this.scenariosApi = new ScenariosApi(username, password, apiUrl)
        this.templatesApi = new TemplatesApi(username, password, apiUrl)
        this.workspacesApi = new WorkspacesApi(username, password, apiUrl)

        this.apiList = [
            this.activitiesApi,
            this.callbacksApi,
            this.contactsApi,
            this.customListsApi,
            this.distributionListsApi,
            this.eventsApi,
            this.importsApi,
            this.messagesApi,
            this.resourcesApi,
            this.responseRulesApi,
            this.scenariosApi,
            this.templatesApi,
            this.workspacesApi
        ]
        this.defaultOptions = {
            headers: {
                Authorization: `Basic ${Buffer.from(
                    `${username}:${password}`
                ).toString("base64")}`,
            },
        }

        const operationTypes = generateOperationTypes()

        for (const key in operationTypes) {
            this.apiList.forEach(api => {
                if (api[key]) {
                    if (key.includes('get')) {
                        this[key] = () => {
                            const accept = operationTypes[key].response ?
                                operationTypes[key].response.shift() : 'application/json'
                            const messageOptions = {
                                headers: {
                                    ...this.defaultOptions.headers,
                                    'Accept': accept.toString() || 'application/json',
                                }
                            }
                            return api[key](this.apiKey, accept, messageOptions)
                        }
                    } else if (key.includes('post') || key.includes('put')) {
                        this[key] = (payload) => {
                            const accept = operationTypes[key].response ?
                                operationTypes[key].response.shift() : 'application/json'
                            const contentType = operationTypes[key].request
                                ? operationTypes[key].request.shift() : 'application/json'

                            const messageOptions = {
                                headers: {
                                    ...this.defaultOptions.headers,
                                    'Accept': accept.toString() || 'application/json',
                                    'Content-Type': contentType.toString() || 'application/json'
                                }
                            }
                            return api[key](this.workspaceId, this.apiKey, contentType, accept, payload, messageOptions)
                        }
                    }
                }
            })
        }
    }


}
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
    console.log(client)

    // return await client.getCallbacks({ test: 123 })

    const sampleMessage = {
        to: '639911234567',
        subject: `Hi there Buddy`,
        body: `Hi there from Whispir"`,
    }
    // return await client.postMessages(sampleMessage)

    return await client.getMessages()
}
main()
    .then(({ body, response: { headers } }) => {
        console.log('result', body, headers)
    })
    .catch(error => {
        console.error(error)
    })