//Jab hum kisi variable mein value rakhte hain, woh assignment hai.
//= sabse basic assignment operator hai.

//+= — Add karke assign karo
x += 2;
// Matlab: x = x + 2
// x = 2 + 2 = 4

//-= — Subtract karke assign karo
x -= 2;
// Matlab: x = x - 2
// x = 4 - 2 = 2

//*= — Multiply karke assign karo
x *= 2;
// Matlab: x = x * 2
// x = 2 * 2 = 4

///= — Divide karke assign karo
x /= 2;
// Matlab: x = x / 2
// x = 4 / 2 = 2

//%= — Modulo karke assign karo
x %= 2;
// Matlab: x = x % 2
// x = 2 % 2 = 0

//**= — Power karke assign karo
x **= 2;
// Matlab: x = x ** 2
// x = 0 ** 2 = 0

let a = 20;
let b = 5;
let c = 9;

// b ko a mein add karo
a += b;
console.log("a after += b:", a);  // 25

// a ko c se divide karo
a /= c;
console.log("a after /= c:", a);  // 2.77...

// c ki value replace karo c % b se
c %= b;
console.log("c after %= b:", c);  // 4

// Teeno print karo
console.log(a, b, c);  // 2.77... 5 4

