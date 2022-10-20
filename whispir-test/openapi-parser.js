const json = require('../openapi.json')

const generateOperationTypes = () => {
    const paths = Object.getOwnPropertyNames(json.paths)

    let ret = {}

    paths.forEach((path) => {
        const pathProps = Object.getOwnPropertyNames(json.paths[path])
        pathProps.forEach(pathProp => {
            const x = json.paths[path][pathProp]
            const operationId = x.operationId

            if (operationId) {
                ret[operationId] = {}
                ret[operationId].operationId = operationId

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