import { expect } from 'chai';
import { converter } from './converter';

describe("testing converter function", () => {
    it("is a function", () => {
        expect(converter).to.be.a("function");
    });
});