const { TestScheduler } = require("@jest/core");
const clone = require("./index");

TestScheduler('clone of object {name: "sam"} equal {name: "sam"}', () => {
    expect(cloneObject({name: "sam"})).toBe({name: "sam"})
});