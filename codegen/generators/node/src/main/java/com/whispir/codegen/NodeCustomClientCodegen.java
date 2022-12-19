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

    @Override
    public Map<String, ModelsMap> postProcessAllModels(Map<String, ModelsMap> models) {
        for (ModelsMap modelsMap : models.values()) {
            for (ModelMap modelMap : modelsMap.getModels()) {
                CodegenModel model = modelMap.getModel();
                for (CodegenProperty cp : model.vars) {
                    // ADD VARS FOR ALL REFERENCED OBJECT MODELS
                    if (cp.isModel == true) {
                        // FIND MATCHING MODEL FOR VAR
                        for (ModelsMap modelsMap2 : models.values()) {
                            for (ModelMap modelMap2 : modelsMap2.getModels()) {
                                CodegenModel model2 = modelMap2.getModel();

                                if (cp.baseType == model2.classname) {
                                    cp.setVars(model2.vars);
                                }
                            }
                        }
                    }
                    // ADD VARS FOR ALL REFERENCED ARRAY MODELS
                    if (cp.isArray == true) {
                        // FIND MATCHING MODEL FOR VAR
                        for (ModelsMap modelsMap2 : models.values()) {
                            for (ModelMap modelMap2 : modelsMap2.getModels()) {
                                CodegenModel model2 = modelMap2.getModel();
                                if (cp.complexType == model2.classname) {
                                    cp.items.setVars(model2.vars);

                                }
                            }
                        }
                    }
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
                    if (cp.isModel == true) {
                        // FIND MATCHING MODEL FOR VAR
                        for (ModelsMap modelsMap2 : modelsMapGlobal.values()) {
                            for (ModelMap modelMap2 : modelsMap2.getModels()) {
                                CodegenModel model2 = modelMap2.getModel();

                                if (cp.baseType == model2.classname) {
                                    cp.setVars(model2.vars);
                                }
                            }
                        }
                    }
                }
            }
        }

        return operations;
    }
}
