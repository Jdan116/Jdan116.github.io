const chai = window.chai
let assert = chai.assert;

describe("sum", () => {
    it("takes an array of number and return their sum",
        () => {
            assert.equal(10, sum([1, 2, 3, 4]));
        });
});

describe("multiply", () => {
    it("takes an array of number and return their product", () => {
        assert.equal(24, multiply([1, 2, 3, 4]));
    });
});

describe("reverse", () => {
    it("takes a string and return the string in reverse order", () => {
        assert.equal("leinad", reverse("daniel"));
    });
});

describe("findLongestWord", () => {
    it("takes an array of words and return the longest word", () => {
        assert.equal("doing?", findLongestWord("Hi, how are you doing?"));
    });
});