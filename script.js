const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const multiply = function(num1, num2) {
    return num1 * num2;
};

const divide = function(num1, num2){
    if(num2 != 0){
        return num1 / num2;
    }else{
        return 'Invalid denominator!';
    }
}

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const operate = function(num1, num2, operator){
    if(operator == '+'){
        return add(num1, num2);
    }else if(operator == '-'){
        return subtract(num1, num2);
    }else if(operator == 'x'){
        return multiply(num1, num2);
    }else if(operator == '÷'){
        return divide(num1, num2);
    }else if(operator == '^'){
        return power(num1, num2);
    }
}

const display = document.querySelector("#output");
let var1;
let var2;
let operator;

let clearDisp = true;
let lastEqual = false;
let lastOperator = false;

const clear = document.querySelector("#clr");
clear.addEventListener("click", () => {
    display.textContent = "0";
    var1 = undefined;
    var2 = undefined;
    operator = undefined;
    
    clearDisp = true;
    lastEqual = false;
    lastOperator = false;
})

const back = document.querySelector("#back");
back.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0,-1);

    if(display.textContent == ""){
        display.textContent = 0;
    }
});

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener("click", () => {
        if(lastOperator == false){
            if(var1 == undefined && var2 == undefined){
                var1 = display.textContent;
            }else if(var2 == undefined && lastEqual == false){
                var2 = display.textContent;
            }

            if(var1 != undefined && var2 != undefined && operator != undefined){
                if(operator == "+"){
                    console.log(`add numbers ${var1} and ${var2}`);
                    var1 = operate(Number(var1), Number(var2), operator);
            
                    if(String(var1).includes('.')){
                        var1 = var1.toFixed(2);
                    }
                    
                    console.log(`equals to ${var1}`);
                    var2 = undefined;
                }else if(operator == "-"){
                    console.log('subtract numbers');
                    var1 = operate(Number(var1), Number(var2), operator);
            
                    if(String(var1).includes('.')){
                        var1 = var1.toFixed(2);
                    }
                    
                    console.log(`equals to ${var1}`);
                    var2 = undefined;
                }else if(operator == "÷"){
                    console.log('divide numbers');
                    var1 = operate(Number(var1), Number(var2), operator);

                    if(var1 != 'Invalid denominator!'){
                        console.log(`divide equals to ${var1}`);
            
                        if(String(var1).includes('.')){
                            var1 = var1.toFixed(2);
                        }
                        
                        var2 = undefined;
                    }else{
                        var1 = undefined;
                        var2 = undefined;
                        operator = undefined;

                        clearDisp = true;
                        lastEqual = false;
                        lastOperator = false;
                    }
                }else if(operator == "^"){
                    console.log('exponent numbers');
                    var1 = operate(Number(var1), Number(var2), operator);
            
                    if(String(var1).includes('.')){
                        var1 = var1.toFixed(2);
                    }
                    
                    console.log(`equals to ${var1}`);
                    var2 = undefined;
                }else if(operator == "x"){
                    console.log('multiply numbers');
                    var1 = operate(Number(var1), Number(var2), operator);
            
                    if(String(var1).includes('.')){
                        var1 = var1.toFixed(2);
                    }
                    
                    console.log(`equals to ${var1}`);
                    var2 = undefined;
                }
            }
            
            display.textContent = var1;
            clearDisp = true;
            lastEqual = false;
    }
    
    if(display.textContent != 'Invalid denominator!'){
        operator = operatorButton.textContent;
        lastOperator = true;
    }
    })
})

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button =>{
    button.addEventListener("click", () =>{
        lastOperator = false;
        if(display.textContent == "0" || clearDisp == true || display.textContent == 'Invalid denominator!' || lastEqual == true){
            display.textContent = button.textContent;
            clearDisp = false;
            if(lastEqual == true){
                var1 = undefined;
                operator = undefined;
                lastEqual = false;
            }
        }else{
            display.textContent += button.textContent;
        }
    })
})

const sign = document.querySelector("#sign");
sign.addEventListener("click", () => {
    
    if(display.textContent.charAt(0) == "-"){
        display.textContent = display.textContent.slice(1);
    }else{
        display.textContent = "-" + display.textContent;
    }

    if(lastOperator == true || lastEqual == true){
        var1 = display.textContent
    }
})

const decimal = document.querySelector("#decimal");
decimal.addEventListener("click", () => {
    if(display.textContent == ""){
        display.textContent = "0.";
    }else if(!display.textContent.includes(".")){
        display.textContent += ".";
    }
})

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
    console.log(var1);
    console.log(var2);
    console.log(operator);
    
    if(var1 != undefined && var2 == undefined){
        var2 = display.textContent;
    }

    if(var1 != undefined && var2 != undefined && operator != undefined){
        if(operator == "+"){
            console.log(`add numbers ${var1} and ${var2}`);
            var1 = operate(Number(var1), Number(var2), operator);
            
            if(String(var1).includes('.')){
                var1 = var1.toFixed(2);
            }
            
            console.log(`equals to ${var1}`);
            var2 = undefined;
        }else if(operator == "-"){
            console.log(`subtract numbers ${var1} and ${var2}`);
            var1 = operate(Number(var1), Number(var2), operator);
            
            if(String(var1).includes('.')){
                var1 = var1.toFixed(2);
            }
            
            console.log(`equals to ${var1}`);
            var2 = undefined;
        }else if(operator == "÷"){
            console.log(`divide numbers ${var1} and ${var2}`);
            var1 = operate(Number(var1), Number(var2), operator);
            if(var1 != 'Invalid denominator!'){
                console.log(`divide equals to ${var1}`);
            
                if(String(var1).includes('.')){
                    var1 = var1.toFixed(2);
                }
                
                var2 = undefined;
            }else{
                var1 = undefined;
                var2 = undefined;
                operator = undefined;

                clearDisp = true;
                lastEqual = false;
                lastOperator = false;
            }
        }else if(operator == "^"){
            console.log(`exponent numbers ${var1} and ${var2}`);
            var1 = operate(Number(var1), Number(var2), operator);
            
            if(String(var1).includes('.')){
                var1 = var1.toFixed(2);
            }
            
            console.log(`equals to ${var1}`);
            var2 = undefined;
        }else if(operator == "x"){
            console.log(`multiply numbers ${var1} and ${var2}`);
            var1 = operate(Number(var1), Number(var2), operator);
            
            if(String(var1).includes('.')){
                var1 = var1.toFixed(2);
            }
            
            console.log(`equals to ${var1}`);
            var2 = undefined;
        }
    }
    if(var1 != undefined){
        display.textContent = var1;
        operator = undefined;
        lastEqual = true;
    }
})






/*let ans = operate(4,5, '+');
console.log(ans);
ans = operate(4,5, '-');
console.log(ans);
ans = operate(4,5, '*');
console.log(ans);
ans = operate(6,2, '/');
console.log(ans);
ans = operate(6,-2, '/')
console.log(ans);
ans = operate(4,5, '^')
console.log(ans);*/