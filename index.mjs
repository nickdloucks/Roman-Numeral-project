import { romNumConv } from './Roman-Numeral-module.mjs';


console.log(romNumConv(46) + " in index.mjs");


const inputBox = document.getElementById("num-in");
const output = document.getElementById("roman-out");

window.changeText = function changeText(userInput){
    output.textContent = romNumConv(userInput);
    console.log("text has been changed by the changeText event Listener");
}
// testing push