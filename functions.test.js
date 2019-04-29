const functions = require('./functions');

test('datatype different than number should throw an error and return undefined', () => {
    expect(functions.fib('10')).toBe(undefined);
    expect(functions.fib(true)).toBe(undefined);
    expect(functions.fib(null)).toBe(undefined);
    expect(functions.fib([1, 2])).toBe(undefined);
})

test('NaN input should throw an error and return undefined', () => {
    expect(functions.fib(NaN)).toBe(undefined);
})

test('Two first values should be equal to 0 and 1', () => {
    expect(functions.fib(2)).toEqual([0, 1]);
})

test('10th value should be equal to 34', () => {
    expect(functions.fib(10)[9]).toBe(34);
})

test('fib(0) should return an empty array', () => {
    expect(functions.fib(0)).toEqual([]);
})

test('negative input should throw an error and return undefined', () => {
    expect(functions.fib(-1)).toBe(undefined);
})

test('floating point input should throw an error and return undefined', () => {
    expect(functions.fib(0.1)).toBe(undefined);
    expect(functions.fib(-0.333)).toBe(undefined);
})
