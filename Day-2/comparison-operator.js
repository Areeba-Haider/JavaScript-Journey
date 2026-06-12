// Comparison Operators

// == Equal to
// != Not equal to
// > Greater than
// < Less than
// >= Greater than or equal to
// <= Less than or equal to

//== — Loose Equality (Sirf value check karta hai)
let x = 5;
let y = "5";

console.log(x == y);  // true

//=== — Strict Equality (value and type check karta hai)

//!= — Loose Inequality

let x = 5;
let y = "5";
console.log(x != y);  // false
//!== — Strict Inequality

console.log(x !== y);  // true

let x = 5;
let y = 6;



//> — Greater Than (Bada hai?)
console.log(y > x);  // true  (6 > 5)
console.log(x > y);  // false (5 > 6 nahi)
console.log(y > y);  // false (6 > 6 nahi, equal hai)

//>= — Greater Than or Equal (Bada ya barabar?)
console.log(y >= y);  // true  (6 >= 6, equal hai to bhi true)

//< — Less Than (Chota hai?)
console.log(x < y);  // true  (5 < 6)
console.log(y < x);  // false (6 < 5 nahi)
console.log(x < x);  // false (5 < 5 nahi, equal hai)

//<= — Less Than or Equal (Chota ya barabar?)
console.log(x <= x);  // true  (5 <= 5, equal hai to bhi true)      



