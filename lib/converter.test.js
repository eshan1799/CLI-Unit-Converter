import { expect } from 'chai';
import { converter } from './converter';

describe("testing converter function", () => {
    it("is a function", () => {
        expect(converter).to.be.a("function");
    });

    it("converts 5m to 500cm", () => {
        const expected = "500 cm";
        const actual = converter("5 m in cm");
        expect(actual).to.equal(expected);
    });

    it("converts 5cm to 0.05m", () => {
        const expected = "0.05 m";
        const actual = converter("5 cm in m");
        expect(actual).to.equal(expected);
    });

    it("converts 0.5m to 50cm", () => {
        const expected = "50 cm";
        const actual = converter("0.5 m in cm");
        expect(actual).to.equal(expected);
    });
});