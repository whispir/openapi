const json = require('../openapi.json')


const generateOperationTypes = () => {
    const schemas = json.components.schemas

    console.log('schemas', schemas)
    
    const paths = Object.getOwnPropertyNames(json.paths)

    let ret = {}

    paths.forEach((path) => {
        const pathProps = Object.getOwnPropertyNames(json.paths[path])

        let pathParamsCount = 0;
        let pathParams = []
        if (json.paths[path].parameters) {
            // console.log(path)
            // console.log('path params', json.paths[path].parameters)
            pathParams = json.paths[path].parameters
            pathParamsCount = json.paths[path].parameters.length
        }


        pathProps.forEach(pathProp => {
            const x = json.paths[path][pathProp]
            const operationId = x.operationId

            let operationParamsCount = 0
            let operationParams = []
            if (x.parameters) {
                operationParamsCount = x.parameters.length
                operationParams = x.parameters
            }

            if (operationId) {
                ret[operationId] = {}
                ret[operationId].operationId = operationId
                ret[operationId].pathParamsCount = pathParamsCount
                ret[operationId].operationParamsCount = operationParamsCount
                ret[operationId].pathParams = pathParams
                ret[operationId].operationParams = operationParams

                if (x.requestBody && x.requestBody.content) {
                    const y = Object.getOwnPropertyNames(x.requestBody.content)
                    ret[operationId].request = y
                }

                if (x.responses) {
                    if (x.responses['200'] && x.responses['200'].content) {
                        const y = Object.getOwnPropertyNames(x.responses['200'].content)
                        ret[operationId].response = y
                    }
                }
            }


        })
    })
    return ret;
}

module.exports = {
    generateOperationTypes
}