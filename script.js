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

const clear = document.querySelector("#clr");
clear.addEventListener("click", () => {
    display.textContent = "";
})

const operatorButtons = document.querySelectorAll("#operator");
operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener("click", () => {

        if(var1 == undefined && var2 == undefined){
            var1 = display.textContent;
        }else if(var2 == undefined){
            var2 = display.textContent;
        }

        if(var1 != undefined && var2 != undefined && operator != undefined){
            if(operator == "+"){
                console.log(`add numbers ${var1} and ${var2}`);
                var1 = operate(Number(var1), Number(var2), operator);
                console.log(`equals to ${var1}`);
                var2 = undefined;
                operator = undefined;
            }else if(operator == "-"){
                console.log('subtract numbers');
                var1 = operate(Number(var1), Number(var2), operator);
                console.log(`equals to ${var1}`);
                var2 = undefined;
                operator = undefined;
            }else if(operator == "÷"){
                console.log('divide numbers');
                var1 = operate(Number(var1), Number(var2), operator);
                console.log(`equals to ${var1}`);
                var2 = undefined;
                operator = undefined;
            }else if(operator == "^"){
                console.log('exponent numbers');
                var1 = operate(Number(var1), Number(var2), operator);
                console.log(`equals to ${var1}`);
                var2 = undefined;
                operator = undefined;
            }else if(operator == "x"){
                console.log('multiply numbers');
                var1 = operate(Number(var1), Number(var2), operator);
                console.log(`equals to ${var1}`);
                var2 = undefined;
                operator = undefined;
            }
        }
        
        display.textContent = var1;
        clearDisp = true;
        //display.textContent = "";
        //display.textContent = operatorButton.textContent;

        operator = operatorButton.textContent;
    })
})

const numberButtons = document.querySelectorAll("#number");
numberButtons.forEach(button =>{
    button.addEventListener("click", () =>{
        if(display.textContent == "0" || clearDisp == true){
            display.textContent = button.textContent;
            clearDisp = false;
        }else{
            display.textContent += button.textContent;
        }
    })
})

const sign = document.querySelector("#sign");
sign.addEventListener("click", () => {
    display.textContent = "";
    display.textContent = "-";
})

const decimal = document.querySelector("#decimal");
decimal.addEventListener("click", () => {
    display.textContent = "";
    display.textContent = ".";
})

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
    display.textContent = "";
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