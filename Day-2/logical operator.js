//Logical Operators

//Logical operators tab use hote hain jab ek saath do ya zyada conditions check karni hon.

// && — Logical AND 
// || — Logical OR
// ! — Logical NOT

let x = 1;
let y = 2;
let z = 3;

console.log(x < y && y < z);  // true

// Dono conditions true hongi tabhi true milega
// Agar ek bhi false hai → poora false

console.log(x < y || y < z);  // true

// Ek bhi condition true hogi → true milega
// Dono false hongi tabhi false

console.log(!(x < y));  // false

// Value ko ulta kar deta hai
// true → false
// false → true


//Expression ko pehle () mein likho, phir ! lagao
// Warna galat result aa sakta hai!


