import { expect } from 'chai';
import { converter } from './converter';

describe("testing converter function", () => {
    it("is a function", () => {
        expect(converter).to.be.a("function");
    });

    it("converts 5m to 500cm", () => {
        const expected = "500 cm";
        const inputted = converter("5 m in cm");
        expect(inputted).to.equal(expected);
    });

    it("converts 5cm to 0.05m", () => {
        const expected = "0.05 m";
        const inputted = converter("5 cm in m");
        expect(inputted).to.equal(expected);
    });

    it("converts 0.5m to 50cm", () => {
        const expected = "50 cm";
        const inputted = converter("0.5 m in cm");
        expect(inputted).to.equal(expected);
    });

    it("converts 0cm to 0m", () => {
        const expected = "0 m";
        const inputted = converter("0 cm in m");
        expect(inputted).to.equal(expected);
    });

    it("display error when enterred two of the same units", () => {
        const expected = console.log("Error! Please enter two different units.");
        const inputted = converter("0 m in m");
        expect(inputted).to.equal(expected);
    });
});