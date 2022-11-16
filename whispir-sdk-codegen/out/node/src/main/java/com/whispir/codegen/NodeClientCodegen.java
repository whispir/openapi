package com.whispir.codegen;

import org.openapitools.codegen.CodegenParameter;
import org.openapitools.codegen.languages.TypeScriptNodeClientCodegen;

public class NodeClientCodegen extends TypeScriptNodeClientCodegen {
    public NodeClientCodegen() {
        super();

        apiSuffix = "Resource";
    }

    public String getName() {
        return "node";
    }

    @Override
    public void postProcessParameter(CodegenParameter parameter) {
        // For typings, parameter only required if default value is also not provided.
        parameter.required = parameter.required == true && parameter.defaultValue == null;
    }
}
