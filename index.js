var num1st;
var num2nd;
var operator;
var displayValue = "";

function clearDisplay(){
    displayValue = "";
    num1st = null;
    num2nd = null;
    operator = null;
    display.textContent = displayValue;
}

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
    if(num2 == 0){
        alert("Dividing by 0!!");
        return NaN;
    }
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
    if(!num1st || num1st == "" || !operator){
        num1st = displayValue.trim();
        if(num1st){
            operator = op;
            addToDisplay(" " + op + " ");
        }
    } else {
        num2nd = displayValue.split(" ")[2];
        if(num2nd){
            num1st = Math.round(operate(+num1st, operator, +num2nd) * 1000) / 1000;
        }

        if(isNaN(num1st)){
            clearDisplay();
        } else {
            displayValue = num1st.toString();
            operator = op;
            addToDisplay(" " + op + " ");
        }
        
    }
}

function calcEquals(){
    let split = displayValue.split(" ")
    if(!operator){
        operator = split[1];
    }
    num2nd = split[2];
    if(num2nd && operator){
        num1st = Math.round(operate(+num1st, operator, +num2nd) * 1000) / 1000;
        if(isNaN(num1st)){
            clearDisplay();
        } else {
            displayValue = num1st.toString();
            display.textContent = displayValue;
            operator = null;
        }
        
    }
}