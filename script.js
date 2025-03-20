const mainDiv = document.getElementById('main-div');
const outputField = document.getElementById('output-field');

const btns = document.querySelectorAll(".button")
const numbtns = document.querySelectorAll(".numbtn");
const oprbtns = document.querySelectorAll(".oprbtn");
const periodbtn = document.getElementById("period");

let val;
let firstVal = "";
let secondVal = "";
let nextVal = false;
let oprVal;
let inputVal;
let outputVal;
let hasOperand = false;
let result;
let hasPeriod = false;


 numbtns.forEach((button) => {
    button.addEventListener("click", () => {
        val = button.value;
        console.log(val);

        if(nextVal === false){
            firstVal += val;
            if (val === '.') {
                periodbtn.disabled = true;
            }
        }else{
            secondVal += val;
            if (val === '.') {
                periodbtn.disabled = true;
            }
        }

        displayOutput();
    });
 });

 oprbtns.forEach((button) => {
    button.addEventListener("click", () => {
        let opr = button.value;
        inputVal = "";
        val = opr;
        periodbtn.disabled = false;

        console.log(opr + " operand");
        
        switch (opr) {
            case "delete":
                backspace();
                break;
            case "equals":
                val = "";
                Operate();
                nextVal = false;
                break;
            case "clear":
                clearInput();
                break;
            default:
                if(!hasOperand){
                    hasOperand = true;
                    outputField.textContent = outputVal + opr;
                    outputVal += opr;
                    oprVal = opr;
                    nextVal = true;
                  
                    console.log("Operation Triggered");
                }
                else{
                    console.log("Operator already exists");
                }

        }

    });
 });

function displayOutput(){
    if(outputVal === undefined){
        outputVal = val;
    }else {
        outputVal += val;
    }

    outputField.textContent = outputVal;
}

function Operate(){

    firstVal = Number(firstVal);
    console.log(firstVal);
    secondVal = Number(secondVal);
    console.log(secondVal);

    switch(oprVal) {
        case "+":
            result = firstVal + secondVal;
            break;
        case "-":
            result = firstVal - secondVal;
            break;
        case "x":
            result = firstVal * secondVal;
            break;
        case "/":
            result = firstVal / secondVal;
            break;
        default:
            console.log("Invalid operation");
            result = null; // Assign a default value if no valid operation is found
    }

    clearInput();

    let isInteger = Number.isInteger(result);
    if (!isInteger) {
        result = result.toFixed(2).toString();
    }

    firstVal = result.toString();
    outputVal = result.toString();
    displayOutput();
    hasOperand = false;
    console.log(result);
}

function backspace(){
    if(nextVal){
        secondVal = secondVal.slice(0, -1) || "0";
        console.log("secondval:" + secondVal);
        if(secondVal === "0"){
            nextVal = false;
        }
    }
    if(hasOperand){
        hasOperand = false;
        oprVal = "";
        console.log("oprval:" + oprVal);
    }
    else{
        firstVal = firstVal.slice(0, -1) || "0";
        console.log("firstval:" + firstVal);
    }

    outputVal = outputVal.slice(0, -1);
    outputField.textContent = outputVal;
    console.log("backspace");
}

function clearInput(){
    firstVal = firstVal.toString();
    secondVal = secondVal.toString();
    firstVal = "";
    secondVal = "";
    oprVal = "";
    outputVal = "";
    hasOperand = false;
    outputField.textContent = "0";
}

