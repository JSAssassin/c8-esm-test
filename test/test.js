const { add } = require('../lib');

describe("add", function () {
    it("adds 1 and 2", function () {
        const result = add(1, 2);
        console.log(result);
    });
    it("adds 3 and 4", function () {
        const result = add(3, 4);
        console.log(result);
    });

    it("adds 5 and 6", function () {
        const result = add(5, 6);
        console.log(result);
    });
});

describe("sub", function () {

});
