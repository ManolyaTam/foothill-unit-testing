/**
 * Performs a calculation based on the given operator.
 *
 * @param {number} x - The first value.
 * @param {string} op - The mathematical operation to perform.
 * @param {number} y - The second value.
 * @returns {number} The result of the calculation.
 */

const calc = (x, op, y) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw Error('Invalid input type');
    }
    switch (op) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            if (y == 0) {
                throw Error('Division by zero')
            } else {
                return x / y;
            }
        default:
            throw Error('Invalid operator');
    }
}

module.exports = calc;