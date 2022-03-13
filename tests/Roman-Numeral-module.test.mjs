import {romNumConv} from "../src/Roman-Numeral-module.mjs";
test("Returns a Roman Numeral string: 4 ==> IV", () => {
    expect(romNumConv("4")).toBe("IV");
});
