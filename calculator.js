/**
 * Performs a calculation based on the given operator.
 * @returns {number} The result of the calculation.
 */

const calc = (first, op, second, ...rest) => {
    let y = second, x = first;
    if (second > 1000) {
        y = 0;
    }
    if (first > 1000) {
        x = 0;
    }
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
            case '^':
                return x ** y;
            case '%':
                if (y == 0) {
                    throw Error('mod by zero is undefined')
                }
                return x % y;

            case '/':
                if (y == 0) {
                    throw Error('Division by zero')
                }
                return x / y;
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