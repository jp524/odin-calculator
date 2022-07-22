const calculator = require("./calculator");

// Tests for integers
describe("add", () => {
	test("adds 0 and 0", () => {
		expect(calculator.add(0,0)).toBe(0);
	});

	test("adds 2 and 2", () => {
		expect(calculator.add(2,2)).toBe(4);
	});

	test("adds positive numbers", () => {
		expect(calculator.add(2,6)).toBe(8);
	});
});

describe("subtract", () => {
	test("subtracts numbers", () => {
		expect(calculator.subtract(10,4)).toBe(6);
	});
  
  test("substract to have a negative result", () => {
    expect(calculator.subtract(1,10)).toBe(-9);
  })
});

describe("multiply", () => {
	test("multiplies two numbers", () => {
		expect(calculator.multiply(2,4)).toBe(8);
	});

	test("multiplies by zero", () => {
		expect(calculator.multiply(10,0)).toBe(0);
	});
});

describe("divide", () => {
	test("divides 10 by 2", () => {
		expect(calculator.divide(10,2)).toBe(5);
	});

	test("divides by 0", () => {
		expect(calculator.divide(10,0)).toBe(Infinity);
	});
});