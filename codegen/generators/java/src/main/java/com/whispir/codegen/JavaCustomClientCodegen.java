package com.whispir.codegen;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.openapitools.codegen.*;
import org.openapitools.codegen.model.*;
import org.openapitools.codegen.languages.JavaClientCodegen;

public class JavaCustomClientCodegen extends JavaClientCodegen {
    private Map<String, ModelsMap> modelsMapGlobal = new HashMap<String, ModelsMap>();

    public JavaCustomClientCodegen() {
        super();
    }

    public String getName() {
        return "java-custom";
    }

    private class CustomSort implements Comparator<CodegenProperty> {
        @Override
        public int compare(CodegenProperty o1, CodegenProperty o2) {
            boolean b1 = o1.isReadOnly;
            boolean b2 = o2.isReadOnly;
            return Boolean.compare(b2, b1);
        }
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
                model.vars.sort(new CustomSort());
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
                op.bodyParam.vars.sort(new CustomSort());
                for (CodegenProperty cp : op.bodyParam.vars) {
                    populateModelVars(modelsMapGlobal, cp);
                }
            }
        }

        return operations;
    }
}
