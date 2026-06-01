let name = "Ali";
let message = `Hello ${name}`;
console.log(message);

let age1= 25;
let message1 = `You are ${age1} years old.`; // Backticks
console.log(message1);

// A string is used to store a text value. It is a sequence of characters. There
// are different ways to declare a string:
// Double quotes
// Single quotes
// Backticks: special template strings in which you can use variables
// directly

// ${} ke andar jo bhi likho:
// Number
// Variable
// Expression (5 + 5)
// Woh pehle calculate hoga,
// phir string me convert ho jayega.


let result = `Total is ${5 + 5}` ;
console.log(result);
console.log(typeof result);