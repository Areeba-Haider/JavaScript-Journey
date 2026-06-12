
//Arithmetic Operators (+,-,*,/,%)

//rules:
// Number + Number    Sum
// String + String  Concatenation 
// String - Number    NaN
// String * Number  NaN


// Increment ++ → value mein 1 add karta hai
// Decrement -- → value mein se 1 minus karta hai
// Inhe Unary Operators bhi kehte hain (sirf ek operand chahiye)

let nr1 = 4;
nr1++;           // nr1 = nr1 + 1
console.log(nr1); // 5

let nr2 = 4;
nr2--;           // nr2 = nr2 - 1
console.log(nr2); // 3

//Postfix x++ — Pehle dikhao, phir badhao

let nr = 2;
console.log(nr++); // pehle 2 print hoga
console.log(nr);   // ab 3 print hoga

//Kyun? Postfix mein pehle variable ki purani value use hoti hai, phir increment hota hai

//Prefix ++x — Pehle badhao, phir dikhao
let nr = 2;
console.log(++nr); // pehle increment hoga, phir 3 print hoga

// Operators ka Order — Operator Precedence
// Operators ek specific order mein execute hote hain — bilkul maths ki tarah!

// Order    Name                         Symbol                     Example
// 1st      Grouping                     ( )                       (x + y)
// 2nd      Exponentiation               **                         x ** y
// 3rd      Prefix increment/decrement   --, ++                    --x, ++y
// 4th      Multiplication, Division, Modulus *, /, %                x * y
// 5th      Addition, Subtraction            +, -                    x + y



let x = 20;

let a = x++;  // pahly jo x ki value hai usko use karega, phir increment karega
let b = ++x;

console.log( "a:" + a);
console.log( "b:" + b);
console.log( "x:" + x);

// ++x → Pehle change, phir use.
// x++ → Pehle use, phir change.