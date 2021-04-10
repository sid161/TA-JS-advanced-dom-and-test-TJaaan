const { TestScheduler } = require('@jest/core');
const checkFive = require('./num_check');
test("test case", () => {
    expect(checkFive(4)).toBe( '4 is less than 5');
});

const checkFive = require('./num_check');
test("test case", () => {
    expect(checkFive(6)).toBe('6 is greater than 5');
});

