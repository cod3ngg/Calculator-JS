
const mainDiv = document.getElementById('main-div');
const outputField = document.getElementById('output-field');

const numbtns = document.querySelectorAll(".numbtn");
const oprbtns = document.querySelectorAll(".oprbtn");

let val;
let firstVal;
let secondVal;
let nextVal = false;
let oprVal;
let inputVal;
let outputVal;
let hasOperand = false;


 numbtns.forEach((button) => {
    button.addEventListener("click", () => {
        val = button.value;
        console.log(val);
        userInputVal();
        displayOutput();
    });
 });

 oprbtns.forEach((button) => {
    button.addEventListener("click", () => {
        let opr = button.value;
        inputVal = "";
        val = opr;
        hasOperand = true;
       

        console.log(opr + " operand");
        
        switch(opr){
            case "equals":
                val = "";
                Operate();
                break;
            default:
                outputField.textContent = outputVal + opr;
                outputVal += opr;
                console.log("Operation Triggered");
        }


        oprVal = opr;
        nextVal = true;
    });
 });


function userInputVal(){
    if(inputVal === undefined){
        inputVal = val;
    }else {
        inputVal += val;
    }

    if(nextVal === true){
        secondVal = inputVal;
    }else{
        firstVal = inputVal;
    }
}

function displayOutput(){
    if(outputVal === undefined){
        outputVal = val;
    }else {
        outputVal += val;
    }

    outputField.textContent = outputVal;
}

function Operate(){
    let result;

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

    outputField.textContent = result;
    console.log(result);
}
