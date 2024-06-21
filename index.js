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
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
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

function addOperator(op){
    if(num1st == null || num1st == ""){
        num1st = displayValue.trim();
        if(num1st){
            operator = op;
            addToDisplay(" " + op + " ");
        }
        console.log(num1st);
    } else {//if (num2nd == null)
        num2nd = displayValue.split(" ")[2];
        if(num2nd){
            num1st = Math.round(operate(+num1st, operator, +num2nd) * 1000) / 1000;
        }
        console.log("1st " + num1st);
        console.log(num2nd);
        displayValue = num1st.toString();
        operator = op;
        addToDisplay(" " + op + " ");
    }
}

function clearDisplay(){
    displayValue = "";
    num1st = null;
    num2nd = null;
    operator = null;
    display.textContent = displayValue;
    console.log(displayValue);
}