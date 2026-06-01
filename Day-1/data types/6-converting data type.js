// JavaScript Automatically Convert Karta Hai (Type Coercion)
let nr1 = 2;
let nr2 = "2";

let result = (nr1 * nr2);

console.log(result);
console.log( "type of result: " + typeof result);
console.log(  "type of nr1 and nr2: " + typeof nr1, typeof nr2);

// (multiply) sirf numbers ke saath kaam karta hai
// Isliye JavaScript "2" ko number me convert kar deta hai.
// 👉 "2" → 2
// 👉 2 * 2 = 4

let minus = nr1 - nr2;
console.log( "minus: " + minus);
console.log( "type of minus: " + typeof minus);

// | Function    | Kaam               |
// | ----------- | ------------------ |
// | `String()`  | String banata hai  |
// | `Number()`  | Number banata hai  |
// | `Boolean()` | Boolean banata hai |

let nrToStr = 6;
nrToStr = String(nrToStr);

console.log( "1 nrToStr: " + nrToStr, typeof nrToStr); //    "6" string

let strToNr = "12";
strToNr = Number(strToNr);

console.log( "2 strToNr: " + strToNr, typeof strToNr); //    12 number

// null ko Number me convert karo
let nullToNr = null;
nullToNr = Number(nullToNr);

console.log( "3 nullToNr: " + nullToNr, typeof nullToNr); // 0 number


// Empty String
let emptyStrToNr = "";
emptyStrToNr= Number(emptyStrToNr); 

console.log( "4 emptyStrToNr: " + emptyStrToNr, typeof emptyStrToNr,); //    0 number


// undefined ko Number me convert karo
let undefinedToNr = undefined;
undefinedToNr = Number(undefinedToNr); 
console.log( "5 undefinedToNr: " + undefinedToNr, typeof undefinedToNr); // 0 number

// Agar string number nahi ban sakti
let strToNr1 = "abc";
strToNr1 = Number(strToNr1); 
console.log( "6 strToNr1: " + strToNr1, typeof strToNr1); // NaN


let strToBool2 = "false";
strToBool2 = Boolean(strToBool2);

console.log( "7 strToBool2: " + strToBool2, typeof strToBool2);

// Har non-empty string → true
// Chahe wo "false" hi kyun na likha ho!


let strToBool = "";
strToBool = Boolean(strToBool);

console.log( "8 strToBool: " + strToBool, typeof strToBool);


// Boolean Rule Yaad Rakho

// Ye values false hoti hain:

// "" (empty string)
// 0
// null
// undefined
// NaN
// Baaki sab → true