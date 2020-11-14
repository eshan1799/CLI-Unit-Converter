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
});