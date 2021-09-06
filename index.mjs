import { romNumConv } from './Roman-Numeral-module.mjs';
//document.addEventListener("DOMContentLoaded", function() {


console.log(romNumConv(46) + " in index.mjs");


const inputBox = document.getElementById("num-in");
const output = document.getElementById("roman-out");


/*
const span = document.getElementById("test-span");
const textTest = document.createTextNode("testing 1,2,3");
span.appendChild(textTest);
*/
function changeText(userInput){
    //const textTest = document.createTextNode(userInput);
    //output.appendChild(textTest);
    //Event.preventDefault()
    output.textContent = userInput;
    console.log("text has been changed by the changeText event Listener");
}

inputBox.addEventListener('input', changeText(inputBox.value));


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