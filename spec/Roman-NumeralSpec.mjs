import { default as toRN } from "../src/Roman-Numeral.mjs";

describe('A reference tool: Converts base-10 numbers to Roman Numerals.', ()=>{
    it('Does NOT accept floating point numbers.', ()=>{
        expect(toRN(4.1)).toEqual("Invalid input: \
        Please enter a positive integer.");
    });

    it('Parses single-digit numbers correctly.', ()=>{
        expect(toRN(9)).toEqual("IX");
    });

    it('Parses multi-digit numbers correctly.', ()=>{
        expect(toRN(48)).toEqual('XLVIII');
    });

    it('Rejects inputs with non-numeric characters.', ()=>{
        expect(toRN('6$2')).toEqual("Invalid input: \
        Please enter a positive integer.");
    });

    it('Rejects negative numbers and zero.', ()=>{
        expect(toRN(-1)).toEqual("Invalid input: \
        Please enter a positive integer.");
        expect(toRN(0)).toEqual("Invalid input: \
        Please enter a positive integer.");
    });

    it('Truncates integers written in decimal format (ex: 89.0, or 89.00, etc.).', ()=>{
        expect(toRN(89.0)).toEqual('LXXXIX');
    });
})