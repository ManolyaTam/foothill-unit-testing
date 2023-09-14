/**
 * Performs a calculation based on the given operator.
 * @returns {number} The result of the calculation.
 */

const calc = (x, op, y, ...rest) => {
    if (!rest.length) {
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
    else {
        problem = ([x, op, y, ...rest]).join(' ');
        return eval(problem); // i can replace the code above with this
    }
}

module.exports = calc;