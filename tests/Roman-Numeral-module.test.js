import {default as romNumConv} from "../Roman-Numeral-module.mjs";
test("Returns a Roman Numeral string", () => {
    expect(getRomansModule("5")).toBe("IV");
});
