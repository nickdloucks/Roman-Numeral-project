import {romNumConv} from "../Roman-Numeral-module.mjs";
test("Returns a Roman Numeral string: 5 ==> IV", () => {
    expect(romNumConv("5")).toBe("IV");
});
