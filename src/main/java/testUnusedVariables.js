// Used variable
const usedVariable = 42;
console.log(`Used variable value is: ${usedVariable}`);

// Unused variables
let unusedVariable = 10; // This variable is declared but never used
const unusedString = "This is an unused string"; // Declared and never used

// A variable conditionally used
let conditionallyUsedVariable = 20;
if (conditionallyUsedVariable > 0) {
  console.log("Conditionally used variable is greater than 0.");
}

// Example with function-scoped variable
function exampleFunction() {
  let functionUnusedVariable = "I am not used"; // Declared but never used
  const functionUsedVariable = "I am used in the function";
  console.log(functionUsedVariable);
}

// Example with block-scoped variable
{
  let blockUnusedVariable = 50; // Declared but never used
  const blockUsedVariable = 100;
  console.log(`Block used variable: ${blockUsedVariable}`);
}

// Call the function
exampleFunction();
