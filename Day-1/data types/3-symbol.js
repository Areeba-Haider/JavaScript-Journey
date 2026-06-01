let str1 = "JavaScript is fun!";
let str2 = "JavaScript is fun!";
//  str1 ──┐
//          ├──► "JavaScript is fun!"  (memory mein ek hi copy)
//  str2 ──┘

console.log(str1 === str2);  // true — same value, same type

let sym1 = Symbol("JavaScript is fun!");
let sym2 = Symbol("JavaScript is fun!");
//  sym1 ──► Symbol#1  (unique)
//  sym2 ──► Symbol#2  (alag unique)
//           ↑
//     description same hai lekin
//     dono bilkul alag hain

console.log(sym1 === sym2);  // false — hamesha!

// Har Symbol unique hota hai
// Chahe uska description same hi kyun na ho

// | String             | Symbol                              |
// | ------------------ | ----------------------------------- |
// | Same value → equal | Same description → phir bhi unequal |
// | Common use         | Unique identity ke liye             |

