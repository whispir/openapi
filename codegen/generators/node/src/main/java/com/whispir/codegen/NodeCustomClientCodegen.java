package com.whispir.codegen;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.openapitools.codegen.*;
import org.openapitools.codegen.model.*;
import org.openapitools.codegen.languages.TypeScriptNodeClientCodegen;

public class NodeCustomClientCodegen extends TypeScriptNodeClientCodegen {
    private Map<String, ModelsMap> modelsMapGlobal = new HashMap<String, ModelsMap>();

    public NodeCustomClientCodegen() {
        super();
    }

    public String getName() {
        return "node-custom";
    }

    private void populateModelVars(Map<String, ModelsMap> models, CodegenProperty cp) {
        for (ModelsMap modelsMap : models.values()) {
            for (ModelMap mp : modelsMap.getModels()) {
                CodegenModel codegenModel = mp.getModel();

                if (cp.isModel && cp.baseType == codegenModel.classname) {
                    cp.setVars(codegenModel.vars);
                }

                if (cp.isArray && cp.complexType == codegenModel.classname) {
                    cp.items.setVars(codegenModel.vars);
                }
            }
        }
    }

    @Override
    public Map<String, ModelsMap> postProcessAllModels(Map<String, ModelsMap> models) {
        for (ModelsMap modelsMap : models.values()) {
            for (ModelMap modelMap : modelsMap.getModels()) {
                CodegenModel model = modelMap.getModel();
                for (CodegenProperty cp : model.vars) {
                    populateModelVars(models, cp);
                }
            }
        }
        modelsMapGlobal = models;
        return models;
    }

    // @Override
    @Override
    public OperationsMap postProcessOperationsWithModels(OperationsMap operations, List<ModelMap> allModels) {
        OperationMap objs = operations.getOperations();

        for (CodegenOperation op : objs.getOperation()) {
            if (op.bodyParam != null) {
                for (CodegenProperty cp : op.bodyParam.vars) {
                    populateModelVars(modelsMapGlobal, cp);
                }
            }
        }

        return operations;
    }
}
