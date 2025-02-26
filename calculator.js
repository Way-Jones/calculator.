const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function(numbers) {
    return numbers.reduce((acc, curr) => acc * curr, 1);
};

const power = function(base, exponent) {
    return Math.pow(base, exponent);
};

const factorial = function(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
};