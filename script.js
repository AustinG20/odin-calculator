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
/*
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
/*
const seven = document.querySelector("#seven");
seven.addEventListener("click", () => {
    if(display.textContent == "0"){
        display.textContent = "7";
    }else{
        display.textContent += "7";
    }
})

const eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
    if(display.textContent == "0"){
        display.textContent = "8";
    }else{
        display.textContent += "8";
    }
})

const nine = document.querySelector("#nine");
nine.addEventListener("click", () => {
    if(display.textContent == "0"){
        display.textContent = "9";
    }else{
        display.textContent += "9";
    }
})




const multiple = document.querySelector("#multiply");
multiple.addEventListener("click", () => {
    if(var1 == undefined){
        var1 = display.textContent;
    }
    console.log(var1);

    display.textContent = "";
    display.textContent = "*";


})*/
/*
const four = document.querySelector("#four");
four.addEventListener("click", () => {
    if(display.textContent == "0"){
        display.textContent = "4";
    }else{
        display.textContent += "4";
    }
})

const five = document.querySelector("#five");
five.addEventListener("click", () => {
    if(display.textContent == "0"){
        display.textContent = "5";
    }else{
        display.textContent += "5";
    }
})

const six = document.querySelector("#six");
six.addEventListener("click", () => {
    if(display.textContent == "0"){
        display.textContent = "6";
    }else{
        display.textContent += "6";
    }
})

const minus = document.querySelector("#subtract");
minus.addEventListener("click", () => {
    if(var1 == undefined){
        var1 = display.textContent;
    }
    console.log(var1);

    display.textContent = "";
    display.textContent = "-";
})
*/
const operatorButtons = document.querySelectorAll("#operator");
operatorButtons.forEach(operator => {
    operator.addEventListener("click", () => {
        if(var1 == undefined){
            var1 = display.textContent;
        }
        console.log(var1);
    
        display.textContent = "";
        display.textContent = operator.textContent;
    })
})

const numberButtons = document.querySelectorAll("#number");
numberButtons.forEach(button =>{
    button.addEventListener("click", () =>{
        if(display.textContent == "0" || display.textContent == "+" || display.textContent == "-" || display.textContent == "÷" || display.textContent == "^" 
            || display.textContent == "x"){
            display.textContent = button.textContent;
        }else{
            display.textContent += button.textContent;
        }
    })
})

/*const one = document.querySelector("#one");
one.addEventListener("click", () => {
    if(display.textContent == "0"){
        display.textContent = "1";
    }else{
        display.textContent += "1";
    }
})

const two = document.querySelector("#two");
two.addEventListener("click", () => {
    if(display.textContent == "0"){
        display.textContent = "2";
    }else{
        display.textContent += "2";
    }
})

const three = document.querySelector("#three");
three.addEventListener("click", () => {
    if(display.textContent == "0"){
        display.textContent = "3";
    }else{
        display.textContent += "3";
    }
})

const plus = document.querySelector("#addition");
plus.addEventListener("click", () => {
    display.textContent = "";
    display.textContent = "+";
})
*/
const sign = document.querySelector("#sign");
sign.addEventListener("click", () => {
    display.textContent = "";
    display.textContent = "-";
})
/*
const zero = document.querySelector("#zero");
zero.addEventListener("click", () => {
    if(display.textContent == "0"){
        display.textContent = "0";
    }else{
        display.textContent += "0";
    }
})
*/
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