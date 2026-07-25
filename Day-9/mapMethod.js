
// map kya karta hai:
// Array ke har element ko transform karke ek naya array return karta hai, jiska size original jitna hi hota hai. Koi element skip ya reject nahi hota — sab ka naya version milta hai.


// 1. Data ko transform/format karna
// Jaise prices mein currency symbol add karna, ya temperature ko Celsius se Fahrenheit mein convert karna:

const celsius = [0, 20, 30, 40];
const fahrenheit = celsius.map(function(temp) {
  return (temp * 9/5) + 32;
});
console.log(fahrenheit); // [32, 68, 86, 104]



// 2. Object array se specific property nikalna
// Ye sabse common use hai — jaise users ki list se sirf naam nikalna:

const users = [
  { name: "Ayesha", age: 25 },
  { name: "Sara", age: 30 },
  { name: "Zain", age: 22 }
];

const usernames = users.map(function(user) {
  return user.name;
});


console.log(usernames); // ["Ayesha", "Sara", "Zain"]

// 3. String ya format changes

const names = ["ali", "sara", "zain"];
const capitalized = names.map(function(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
});
// ["Ali", "Sara", "Zain"]


// 5. Calculations har element par
// Jaise cart mein items ki price * quantity nikalna:
// javascript

const cart = [
  { item: "Book", price: 500, qty: 2 },
  { item: "Pen", price: 20, qty: 5 }
];

const totals = cart.map(function(product) {
  return product.price * product.qty;
});
// [1000, 100]

// Yaad rakhne wali baat: Jab bhi tumhe lagay "mujhe har element ko kuch naya bana kar dikhana hai, lekin same number of items chahiye"



// problem

const students = [
  { name: "Ahmed", city: "Karachi", marks: 85 },
  { name: "Fatima", city: "Lahore", marks: 92 },
  { name: "Bilal", city: "Islamabad", marks: 76 },
  { name: "Hina", city: "Karachi", marks: 68 }
];

let studentNames = students.map((value,index) => {
  return students[index].name;
})

console.log(studentNames);

let sentences = students.map((value, index) =>{
  return `${students[index].name} is form ${students[index].city}`
})

console.log ( sentences);