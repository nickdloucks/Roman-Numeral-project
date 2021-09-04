import { default as romNumConv } from './Roman-Numeral-module.mjs';

console.log(romNumConv(989786));

const output = document.getElementById("roman-out");
const inputBox = document.getElementById("num-in");

/*
const span = document.getElementById("test-span");
const textTest = document.createTextNode("testing 1,2,3");
span.appendChild(textTest);
*/
function changeText(userInput){
    output.textContent = userInput;
    output.innnerText = userInput;
}

inputBox.addEventListener('change', changeText);


/*
function updateRoman(){
    console.log("inside event listener");
    console.log(inputBox.value);
    output.textContent = romNumConv(inputBox.value);
    console.log("STILL inside event listener");
}
inputBox.addEventListener('change', updateRoman);*/

