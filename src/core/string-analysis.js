import { isNumber } from './utils';

const parseStrFnParams = function(str){
    const containers = [
        {
            type: "variable",
            str: "",
            params: ""
        }
    ];
    var inFunction = 0;
    var inString = false;
    var strChar = '';
    var currentIndex = 0;

    str.split("").map((c, i) => {
        // console.log(c)
        if (c == '"' || c == "'") {
            if (c == strChar) {
                inString = false;
                strChar = '';
                if (inFunction) {
                    containers[currentIndex].params += c;
                }
            }
            else if (inFunction) {
                containers[currentIndex].params += c;
                if (!inString) {
                    inString = true;
                    strChar = c;
                }
            } 
            else if (!inString) {
                inString = true;
                strChar = c;
                if(!inFunction) containers[currentIndex].type = 'string';
            } else {
                containers[currentIndex].str += c;
            }
        } 
        else if(c == " "){
            if(inFunction){
                containers[currentIndex].params += c;
            }
            else if(inString){
                containers[currentIndex].str += c;
            }
            else if(containers[currentIndex].type == 'variable'){
                // if()
            }
            else{

            }
        }
        else if (c == ',') {
            if (inFunction) {
                containers[currentIndex].params += c;
            } else if(inString){
                containers[currentIndex].str += c;
            }else{
                if(containers[currentIndex].type!= 'string'){
                    containers[currentIndex].str = containers[currentIndex].str.trim()
                }
                if(containers[currentIndex].type== 'variable'){
                    if(isNumber(containers[currentIndex].str)){
                        containers[currentIndex].str = Number(containers[currentIndex].str);
                    }
                }
                currentIndex++;
                containers.push({
                    type: "variable",
                    str: "",
                    params: ""
                });
                
            }
        }
        else if (c == ')') {
            if (inFunction) {
                if (!inString) {
                    inFunction--;
                    if(inFunction == 0){
                        containers[currentIndex].args = parseStrFnParams(containers[currentIndex].params);
                        if(containers[currentIndex].type!= 'string'){
                            containers[currentIndex].str = containers[currentIndex].str.trim()
                        }
                        if(isNumber(containers[currentIndex].str)){
                            containers[currentIndex].str = Number(containers[currentIndex].str);
                        }
                        currentIndex++;
                        containers.push({
                            type: "variable",
                            str: "",
                            params: ""
                        });
                        
                    }else{
                        containers[currentIndex].params += c;
                    }
                    
                } else {
                    containers[currentIndex].params += c;
                }
            } else {
                containers[currentIndex].str += c;
            }
        } else if (c == '(') {
            if (!inFunction) {
                if (containers[currentIndex].str != '') {
                    inFunction++;
                    containers[currentIndex].type = 'function';
                }
                else {
                    throw new Error("cú pháp không hợp lệ tại vị trí: " + i);
                }
            }else {
                if(!inString) inFunction++;
                containers[currentIndex].params += c;
            }
            // console.log("inFunction", inFunction)
        } else if (inFunction) {
            containers[currentIndex].params += c;
            
        } else {
            containers[currentIndex].str += c;
        }

    });
    if(containers[containers.length-1].str == '' && containers[containers.length-1].type == 'variable'){
        containers.pop();
    }
    // console.log(inFunction)
    return containers;
}
const stringAnalysis = function (str) {
    const containers = [
        {
            type: "variable",
            str: "",
            params: ""
        }
    ];
    var inFunction = 0;
    var inString = false;
    var strChar = '';
    var currentIndex = 0;

    str.split("").map((c, i) => {
        // console.log(c)
        if (c == '"' || c == "'") {
            if (c == strChar) {
                inString = false;
                strChar = '';
                if (inFunction) {
                    containers[currentIndex].params += c;
                }
            }
            else if (inFunction) {

                containers[currentIndex].params += c;
                if (!inString) {
                    inString = true;
                    strChar = c;
                }
            } 
            else if (!inString) {
                inString = true;
                strChar = c;
                if(!inFunction) containers[currentIndex].type = 'string';
            } else {
                containers[currentIndex].str += c;
            }
        } 
        else if(c == " "){
            if(inFunction){
                containers[currentIndex].params += c;
            }
            else if(inString){
                containers[currentIndex].str += c;
            }
            else if(containers[currentIndex].type == 'variable'){
                // if()
            }
            else{

            }
        }
        else if (c == ';') {
            if (!inFunction && !inString) {
                if(containers[currentIndex].type!= 'string'){
                    containers[currentIndex].str = containers[currentIndex].str.trim()
                }
                if(isNumber(containers[currentIndex].str)){
                    containers[currentIndex].str = Number(containers[currentIndex].str);
                }
                currentIndex++;
                containers.push({
                    type: "variable",
                    str: "",
                    params: ""
                });
            } else if (inString) {
                if (inFunction) {
                    containers[currentIndex].params += c;
                } else {
                    containers[currentIndex].str += c;
                }
            } else if (inFunction) {
                containers[currentIndex].params += ',';
            }
        }
        else if (c == ',') {
            if (inFunction) {
                containers[currentIndex].params += c;
            } else {
                containers[currentIndex].str += c;
            }
        }
        else if (c == ')') {
            if (inFunction) {
                if (!inString) {
                    inFunction--;
                    if(inFunction == 0){
                        containers[currentIndex].args = parseStrFnParams(containers[currentIndex].params);
                        if(containers[currentIndex].type!= 'string'){
                            containers[currentIndex].str = containers[currentIndex].str.trim()
                        }
                        if(isNumber(containers[currentIndex].str)){
                            containers[currentIndex].str = Number(containers[currentIndex].str);
                        }       
                        currentIndex++;
                        containers.push({
                            type: "variable",
                            str: "",
                            params: ""
                        });
                        
                    }else{
                        containers[currentIndex].params += c;
                    }
                    
                } else {
                    containers[currentIndex].params += c;
                }
            } else {
                containers[currentIndex].str += c;
            }
        } else if (c == '(') {
            if (!inFunction) {
                if (containers[currentIndex].str != '') {
                    inFunction++;
                    containers[currentIndex].type = 'function';
                    if(containers[currentIndex].type!= 'string'){
                        containers[currentIndex].str = containers[currentIndex].str.trim()
                    }
                    
                }
                else {
                    throw new Error("cú pháp không hợp lệ tại vị trí: " + i);
                }
            }else {
                if(!inString) inFunction++;
                containers[currentIndex].params += c;
            }
            // console.log("inFunction", inFunction)
        } else if (inFunction) {
            containers[currentIndex].params += c;
            
        } else {
            containers[currentIndex].str += c;
        }

    });
    if(containers[containers.length-1].str == '' && containers[containers.length-1].type == 'variable'){
        containers.pop();
    }
    // console.log(inFunction)
    return containers;
}

export { stringAnalysis };