import { romNumConv } from './Roman-Numeral-module.mjs';
//document.addEventListener("DOMContentLoaded", function() {


console.log(romNumConv(95));

const inputBox = document.getElementById("num-in");
const output = document.getElementById("roman-out");


/*
const span = document.getElementById("test-span");
const textTest = document.createTextNode("testing 1,2,3");
span.appendChild(textTest);
*/
function changeText(userInput){
    const textTest = document.createTextNode(userInput);
    output.appendChild(textTest);
    //output.textContent = userInput;
}

inputBox.addEventListener('change', changeText("hi"));


/*
function updateRoman(){
    console.log("inside event listener");
    console.log(inputBox.value);
    output.textContent = romNumConv(inputBox.value);
    console.log("STILL inside event listener");
}
inputBox.addEventListener('change', updateRoman);*/

//"testing 1,2,3"

//});