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
    }else if(operator == '*'){
        return multiply(num1, num2);
    }else if(operator == '/'){
        return divide(num1, num2);
    }else if(operator == '^'){
        return power(num1, num2);
    }
}

const display = document.querySelector("#output");
let var1;
let var2;
let operator;

const clear = document.querySelector("#clr");
clear.addEventListener("click", () => {
    display.textContent = "";
})

const exponent = document.querySelector("#exponent");
exponent.addEventListener("click", () => {
    display.textContent = "";
    display.textContent = "^";
})

const division = document.querySelector("#divide");
division.addEventListener("click", () => {
    display.textContent = "";
    display.textContent = "÷";
})

const seven = document.querySelector("#seven");
seven.addEventListener("click", () => {
    display.textContent = "";
    display.textContent = "7";
})

const eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
    display.textContent = "";
    display.textContent = "8";
})

const nine = document.querySelector("#nine");
nine.addEventListener("click", () => {
    display.textContent = "";
    display.textContent = "9";
})

const multiple = document.querySelector("#multiply");
multiple.addEventListener("click", () => {
    display.textContent = "";
    display.textContent = "*";
})

const four = document.querySelector("#four");
four.addEventListener("click", () => {
    display.textContent = "";
    display.textContent = "4";
})

const five = document.querySelector("#five");
five.addEventListener("click", () => {
    display.textContent = "";
    display.textContent = "5";
})

const six = document.querySelector("#six");
six.addEventListener("click", () => {
    display.textContent = "";
    display.textContent = "6";
})

const minus = document.querySelector("#subtract");
minus.addEventListener("click", () => {
    display.textContent = "";
    display.textContent = "-";
})

const one = document.querySelector("#one");
one.addEventListener("click", () => {
    display.textContent = "";
    display.textContent = "1";
})

const two = document.querySelector("#two");
two.addEventListener("click", () => {
    display.textContent = "";
    display.textContent = "2";
})

const three = document.querySelector("#three");
three.addEventListener("click", () => {
    display.textContent = "";
    display.textContent = "3";
})

const plus = document.querySelector("#addition");
plus.addEventListener("click", () => {
    display.textContent = "";
    display.textContent = "+";
})

const sign = document.querySelector("#sign");
sign.addEventListener("click", () => {
    display.textContent = "";
    display.textContent = "-";
})

const zero = document.querySelector("#zero");
zero.addEventListener("click", () => {
    display.textContent = "";
    display.textContent = "0";
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