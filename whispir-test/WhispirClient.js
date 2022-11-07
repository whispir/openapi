
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
    UsersApi,
} = require("../whispir-node/dist/api.js");

const { generateOperationTypes } = require('./openapi-parser')


const createClientFn = (key, params, api) => {
    const parameterize = (pathParam, request, response) => {
        let paramName = ''
        let isOp = true

        paramName = (pathParam['$ref']) ?
            pathParam['$ref'].split('parameters/')[1].split('-').join('') : pathParam.name

        if (
            paramName.toLowerCase().includes('workspaceid')
            || paramName.toLowerCase().includes('xapikey')
            || paramName.toLowerCase().includes('accept')
            || paramName.toLowerCase().includes('contenttype')
        ) {
            if (paramName === 'workspaceId') {
                paramName = 'this.workspaceId'
            }
            if (paramName === 'XApiKey') {
                paramName = 'this.apiKey'
            }
            if (paramName.toLowerCase().includes('accept')) {
                if (response && response.length > 0) {
                    paramName = `'${response.shift()}'`
                } else {
                    paramName = `'application/json'`
                }
            }
            if (paramName.toLowerCase().includes('contenttype')) {
                if (request && request.length > 0) {
                    paramName = `'${request.shift()}'`
                } else {
                    paramName = `'application/json'`
                }
            }
            isOp = false
        }
        return { paramName, isOp }
    }
    const {
        operationId,
        pathParams,
        operationParams,
        request,
        response,
        payload,
    } = params

    let fnParams = []
    let passedParams = []

    pathParams.forEach(pathParam => {
        const { paramName, isOp } = parameterize(pathParam, request, response)
        passedParams.push(paramName)
        if (isOp) fnParams.push(paramName)
    })
    operationParams.forEach(operationParam => {
        const { paramName, isOp } = parameterize(operationParam, request, response)
        passedParams.push(paramName)
        if (isOp) fnParams.push(paramName)
    })

    passedParams = Array.from(new Set(passedParams))
    fnParams = Array.from(new Set(fnParams))

    if (payload) {
        fnParams.push(`${operationId}Payload`)
        passedParams.push(`${operationId}Payload`)
    }

    const fnTemplate = `
        async (${fnParams.join(', ')}) => {
            const messageOptions = {
                headers: {
                    ...this.defaultOptions.headers,
                }
            }
            
            return this.${api}['${operationId}']
            (${passedParams.join(', ')}, messageOptions);
        }
    `
    // console.log('fn', fnTemplate)
    return fnTemplate
}

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
        this.usersApi = new UsersApi(username, password, apiUrl)

        this.apiList = [
            // { api: this.activitiesApi, name: 'activitiesApi' },
            { api: this.callbacksApi, name: 'callbacksApi' },
            { api: this.contactsApi, name: 'contactsApi' },
            { api: this.customListsApi, name: 'customListsApi' },
            { api: this.distributionListsApi, name: 'distributionListsApi' },
            { api: this.eventsApi, name: 'eventsApi' },
            { api: this.importsApi, name: 'importsApi' },
            { api: this.messagesApi, name: 'messagesApi' },
            { api: this.resourcesApi, name: 'resourcesApi' },
            { api: this.responseRulesApi, name: 'responseRulesApi' },
            { api: this.scenariosApi, name: 'scenariosApi' },
            { api: this.templatesApi, name: 'templatesApi' },
            { api: this.workspacesApi, name: 'workspacesApi' },
            { api: this.usersApi, name: 'usersApi' },
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
                if (api.api[key]) {
                    this[key] = eval(createClientFn(key, operationTypes[key], api.name))
                }
            })
        }
    }
}

module.exports = WhispirClient