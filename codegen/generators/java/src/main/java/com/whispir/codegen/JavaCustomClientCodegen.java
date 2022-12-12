package com.whispir.codegen;

import java.util.Arrays;
import java.util.List;

import org.openapitools.codegen.*;
import org.openapitools.codegen.model.*;
import org.openapitools.codegen.languages.JavaClientCodegen;

public class JavaCustomClientCodegen extends JavaClientCodegen {
    public JavaCustomClientCodegen() {
        super();
        System.out.println("STARTING THE CODEGEN FOR JAVA");
    }

    public String getName() {
        return "java-custom";
    }

    @Override
    public OperationsMap postProcessOperationsWithModels(OperationsMap operations, List<ModelMap> allModels) {
        OperationMap objs = operations.getOperations();
        System.out.println(objs.getPathPrefix());

        for (CodegenOperation op : objs.getOperation()) {
            System.out.println(op.operationId);
            System.out.println(op.bodyParam);
            System.out.println("\n");

            // Whispir is not RESTful per the OpenAPI Generator methods, because it contains
            // /workspace/{workspaceId} in the path. Overriding these parameter attributes
            // to allow templating based on the REST method.
            // op.isRestfulCreate = "POST".equalsIgnoreCase(op.httpMethod);
            // op.isRestfulShow = "GET".equalsIgnoreCase(op.httpMethod);
            // op.isRestfulUpdate = Arrays.asList("PUT",
            // "PATCH").contains(op.httpMethod.toUpperCase());
            // op.isRestfulDestroy = "DELETE".equalsIgnoreCase(op.httpMethod);
            // op.isRestfulCreate = true;
            // op.isRestfulShow = true;
            // op.isRestfulUpdate = true;
            // op.isRestfulDestroy = true;
        }

        return operations;
    }
}
