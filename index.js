var num1st;
var num2nd;
var operator;
var displayValue = "";

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(a, op, b){
    switch(op){
        case "add":
            return add(a, b);
        case "subtract":
            return subtract(a, b);
        case "multiply":
            return multiply(a, b);
        case "divide":
            return divide(a, b);
        default:
            console.log("Unknown operator");
            break;
    }
}

let display = document.querySelector("#display");

function addToDisplay(num){
    displayValue += num.toString();
    display.textContent = displayValue;
}

function clearDisplay(){
    displayValue = "";
    num1st = null;
    num2nd = null;
    operator = null;
    display.textContent = displayValue;
    console.log(displayValue);
}