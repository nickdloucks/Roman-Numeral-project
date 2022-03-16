import { default as toRN } from './Roman-Numeral.mjs';

// const inputBox = document.getElementById("num-in");
const output = document.getElementById("roman-out");

window.changeText = function changeText(userInput){
    output.textContent = toRN(userInput);
    console.log("User input has been processed by the changeText() event Listener.");
}

// inputBox.addEventListener('keyup', (event)=> {
//     if (event.code == 'Enter'){
//         window.changeText(inputBox.value);
//     }
// });  // ^^ JS event listener to use as alternative if <onChange> property does not work in the HTML for the input element.