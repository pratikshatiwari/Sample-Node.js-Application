// Function expecting exactly two arguments
function multiplyNumbers(a, b) {
    return a * b;
}

// Correct function call
const result1 = multiplyNumbers(10, 5);
console.log("Result 1:", result1);

// Too few arguments
const result2 = multiplyNumbers(10); // Error: Second argument is missing

// Too many arguments
const result3 = multiplyNumbers(10, 5, 2); // Error: Third argument is extra

// Correct function call
const result4 = multiplyNumbers(3, 4);
console.log("Result 4:", result4);
