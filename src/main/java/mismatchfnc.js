// Function expecting two numbers
function addNumbers(a, b) {
    return a + b;
}

// Correct function call
const result1 = addNumbers(10, 5);
console.log("Result 1:", result1);

// Type mismatch: Passing a string instead of a number for the first argument
const result2 = addNumbers("10", 5); // Error: Expected a number, got a string

// Type mismatch: Passing a string instead of a number for the second argument
const result3 = addNumbers(10, "5"); // Error: Expected a number, got a string

// Type mismatch: Passing an object instead of numbers
const result4 = addNumbers({ value: 10 }, [5]); // Error: Expected numbers, got object and array

console.log("Result 2:", result2);
console.log("Result 3:", result3);
console.log("Result 4:", result4);
