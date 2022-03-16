/**
* Converts a base-10 number to a Roman Numeral string.
* Truncates (rounds down) any floating-point numbers to an integer before conversion.
* @param num : number ==> An integer in base-10 format.
* @returns : string ==> A Roman Numeral or error message for invalid inputs.
*/
 
export default function toRN(num){

    /** process:
     * 1. convert decimal to string, split into an array of chars, then reverse the array.
     * 2. loop thru the reversed array of chars; inside the loop, store the digit as a number for comparison.
     * 3. assign the correct sequence of small, medium, and big letters based on the digit's place in the decimal-format number provided.
     * 4. push the letter sequence onto the final roman numeral string and return the finished string.
     */

    let copiedInput = new String(num); // copy param to avoid direct mutation
    const dotZero = /\.\d*/;
    let matchPos = copiedInput.match(dotZero);
    let truncated = '';
    
    if (matchPos){ // if the input contains a period (with 0+ zeros after it), truncate that part of the string off so there is not decimal point
        truncated = copiedInput.slice(0, matchPos.index); // <matchPos[1]> represents the index of the regex match if there is a match
        copiedInput = truncated;
    } // slice re-assignment NOT WORKING

    
    const nonDigits = /\D/g;

    if ((nonDigits.test(copiedInput)) || (Number(copiedInput) < 1)){
        return "Invalid input: \
        Please enter a positive integer."
    }

    let romans = ['I', 'V', 'X', 'L', 'C', 'D', 'M', 'V\u0305', 'X\u0305', 'L\u0305', 'C\u0305', 'D\u0305', 'M\u0305']; // list of Roman numeral letters
        // the '\u0305' code adds a line over the character. In Roman numerals, this indicates the letter has its normal value but multiplied by 1,000 
    let decimalNum = copiedInput.toString().split('').reverse(); //base-10 number is converted to a reversed array of string characters

    function getLetters(magnitude){ // <magnitude> will be an index representing whether a digit is in the 1s, 10s, 100s, or 1000s place etc.
        let letters = romans.slice(magnitude*2, (magnitude*2) + 3);
        // a digit in the 1s place uses Roman letters I, V, & X; 
        // the 10s place uses Roman letters X, L, & C; etc.
        return letters;
    }

    function digitBuilder(decimal, index){ // a digit's position in the reversed array of chars tells us which letters to use
        let useLetters = getLetters(index); //grab the Roman letters necessary for this particular digit of the decimal-format number

        let smallLetter = useLetters[0]; // the #1 letter for any digit. example: I
        let medLetter = useLetters[1]; // the #5 letter for any digit. example: V
        let bigLetter = useLetters[2]; // the #10 letter for any digit. example: X (needed to make a #9)

        let decDigit = Number(decimal); // convert the decimal digit from a string back to a number
        let romDigStr = ''; //string representing the Roman Numeral-ized digit of the given number
        
        //----build the Roman digit:
        switch(decDigit){ // concatenate the letters to make the Roman string for that particular digit
            case 1: romDigStr = romDigStr.concat(smallLetter); break;
            case 2: romDigStr = romDigStr.concat(smallLetter, smallLetter); break;
            case 3: romDigStr = romDigStr.concat(smallLetter, smallLetter, smallLetter); break;
            case 4: romDigStr = romDigStr.concat(smallLetter, medLetter); break; // example: "I" + "V" = "IV" or 4
            case 5: romDigStr = romDigStr.concat(medLetter); break;
            case 6: romDigStr = romDigStr.concat(medLetter, smallLetter); break;
            case 7: romDigStr = romDigStr.concat(medLetter, smallLetter, smallLetter); break;
            case 8: romDigStr = romDigStr.concat(medLetter, smallLetter, smallLetter, smallLetter); break;
            case 9: romDigStr = romDigStr.concat(smallLetter, bigLetter); break;
            default: break;
        }

        return romDigStr;
    }

    let romMap = decimalNum.map(digitBuilder); // Use digitBuilder() as callback on each char to create a new array using Roman letters
    let finalRoman = romMap.reverse().join(''); // reverse the new array back to original order and join back to a string
    
    // console and terminal display of results for user:
    // console.log(finalRoman + " in RomanNum module");
    // console.log(typeof finalRoman);
    //process.stdout.write(finalRoman);

    return finalRoman;
}

toRN(9);