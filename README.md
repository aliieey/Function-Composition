# Function-Composition
Topic about Function Recomposition

Function composition is used for several reasons in programming, particularly for creating clean, modular, and maintainable code. Here's why function composition is beneficial:

1. Modularity:
Breaks Complex Problems into Simpler Parts: Instead of writing large, monolithic functions, you can split functionality into small, reusable pieces (functions) and combine them as needed. This modular approach helps organize code more effectively.


function trimWhitespace(str) { return str.trim(); }
function convertToLowercase(str) { return str.toLowerCase(); }

const cleanInput = compose(convertToLowercase, trimWhitespace, sanitizeInput);


2. Reusability:
Reusable Functions: You can build small, generic functions that handle one task, and reuse them in different contexts by composing them with other functions. This leads to less code duplication.

For example, multiplyBy2 and add3 can be reused and combined in various ways.


3. Readable Code:
Easier to Understand: When functions are composed, it’s often easier to read and understand what the code is doing, as it becomes clear that certain steps are happening in sequence. Composing small functions gives code a more declarative feel, resembling natural language.

const processNumber = compose(add3, multiplyBy2);
console.log(processNumber(5)); // Easy to understand: multiply by 2, then add 3.




