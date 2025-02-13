const mainDiv = document.getElementById('main-div');
const outputField = document.getElementById('output-field');

const btns = document.querySelectorAll(".button");
const oprbtns = document.querySelectorAll(".oprbtn");

let val;
let inputVal;
let hasOperand = false;


 btns.forEach((button) => {
    button.addEventListener("click", () => {
        val = button.value;
        console.log(val);
        userInputVal(); 
    });
 });

 oprbtns.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(val + " operand");
        if(hasOperand === true){
            Operate();
        }else {
            hasOperand = true;
        }

    });
 });


function userInputVal(){
    if(inputVal === undefined){
        inputVal = val;
    }else {
        inputVal += val;
    }

    outputField.textContent = inputVal;
}


function Operate(){
    outputField.textContent = "";
}
