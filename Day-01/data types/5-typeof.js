let str = "Hello";
let nr = 7;
let bigNr = 12345678901234n;
let bool = true;
let sym = Symbol("unique");
let undef = undefined;
let unknown = null;

console.log("str", typeof str);
console.log("nr", typeof nr);
console.log("bigNr", typeof bigNr);
console.log("bool", typeof bool);
console.log("sym", typeof sym);
console.log("undef", typeof undef);
console.log("unknown", typeof unknown);





// typeof null → object
// Kyun aisa?

// Ye JavaScript ka old bug hai
// Jo ab change nahi ho sakta (backward compatibility ki wajah se).

// 👉 Bas yaad rakho:

// | Value     | typeof Result |
// | --------- | ------------- |
// | null      | object ❗      |
// | undefined | undefined     |


// undefined → value assign nahi hui
// null → intentionally empty
// typeof null → object (old bug)
// typeof → data type batata hai
