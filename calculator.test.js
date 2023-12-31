// calculator.test.js
const calc = require('./calculator');

describe('Basic Calculator', () => {
  // Test case: Addition
  it('should return the correct sum of two numbers', () => {
    expect(calc(2, '+', 3)).toBe(5);
  });

  // Test case: Subtraction
  it('should return the correct difference of two numbers', () => {
    expect(calc(5, '-', 2)).toBe(3);
  });

  // Test case: Multiplication
  it('should return the correct product of two numbers', () => {
    expect(calc(4, '*', 6)).toBe(24);
  });

  // Test case: Division
  it('should return the correct quotient of two numbers', () => {
    expect(calc(10, '/', 2)).toBe(5);
  });

  // Test case: Division by zero
  it('should throw an error when dividing by zero', () => {
    expect(() => calc(6, '/', 0)).toThrow('Division by zero');
  });

  // Test case: Negative numbers
  it('should handle negative numbers correctly', () => {
    expect(calc(-8, '+', 5)).toBe(-3);
  });

  // Test case: Decimal numbers
  it('should handle decimal numbers correctly', () => {
    expect(calc(3.5, '*', 2)).toBe(7);
  });

  // Test case: Order of operations
  it('should follow the correct order of operations', () => {
    expect(calc(2, '+', 3, '*', 4)).toBe(14);
  });

  // Test case: Invalid operator
  it('should throw an error for an invalid operator', () => {
    expect(() => calc(5, '$', 3)).toThrow('Invalid operator');
  });

  // Test case: Invalid input type
  it('should throw an error for invalid input types', () => {
    expect(() => calc('2', '+', 3)).toThrow('Invalid input type');
  });

  // Test Case: Powers
  test('it should correctly calculate the power of two numbers', () => {
    expect(calc(2, '^', 3)).toBe(8);
  })

  // Test Case: Modulus
  test('it should correctly calculate the modulus of two numbers', () => {
    expect(calc(2, '%', 3)).toBe(2);
    expect(calc(3, '%', 2)).toBe(1);
    expect(calc(3, '%', 3)).toBe(0);
  })

  // Numbers bigger than 1000 should be ignored
  test('Numbers bigger than 1000 should be ignored', () => {
    expect(calc(1001, '+', 1)).toBe(1);
    expect(calc(1001, '-', 2)).toBe(-2);
    expect(calc(3, '*', 1001)).toBe(0);
    expect(() => calc(4, '/', 1001)).toThrow('Division by zero');
    expect(calc(5, '^', 1001)).toBe(1);
    expect(() => calc(6, '%', 1001)).toThrow('mod by zero is undefined')
  })
})