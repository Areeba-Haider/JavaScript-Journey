// Jab bhi tumhe lagay ki poore array se sirf ek final cheez chahiye — chahe wo number ho (total, average, max), ya object ho (grouping, counting), ya string ho — us waqt map/filter kaam nahi aayenge, sirf reduce hi is kaam ke liye sahi tool hai.

// Agar tum , 0 ya koi bhi starting value nahi doge, to JavaScript khud hi ek rule follow karta hai:

// acc ban jata hai array ka pehla element
// curr shuru hota hai doosre element se


// Addition (acc + curr) 0 add karne se total nahi badalta
// Multiplication (acc * curr)1  se multiply karne se number nahi badalta
// String jodna (acc + curr)"" (khaali string) khaali string jodne se text nahi badalta
// Array banana (acc.push(curr))[] (khaali array)khaali array se shuru karna sahi hai
// Object banana{} (khaali object) khaali object se shuru karna sahi hai

// 1. Sum/Total nikalna

const prices = [100, 200, 300];

const total = prices.reduce((acc, curr) =>
    
    { 
        return  acc + curr },0   // acc pahly zero hota hai 
);

console.log (total);


// 2. Average nikalna
const marks = [80, 90, 70];

const sum = marks.reduce((acc, curr) => {
   return acc + curr;
}, 0);

const average = sum / marks.length;

console.log(average);  // 80


// 3. Sabse bada/chota value dhoondna (max/min)

const numbers = [10, 45, 3, 78];

const max = numbers.reduce((acc, curr) =>
   {  return curr > acc ? curr : acc}
);

console.log(max); // 78

// 4. Array ko object mein convert karna (grouping)

const students = [
  { name: "Ali", city: "Karachi" },
  { name: "Sara", city: "Lahore" },
  { name: "Zain", city: "Karachi" }
];

const groupedByCity = students.reduce(function(acc, student) {
  if (!acc[student.city]) {
    acc[student.city] = [];
  }
  acc[student.city].push(student.name);
  return acc;
}, {}); //student bhi ik object hai 

// { Karachi: ["Ali", "Zain"], Lahore: ["Sara"] }



// problem

const products = [
  { name: "Laptop", category: "Electronics" },
  { name: "Shirt", category: "Clothing" },
  { name: "Phone", category: "Electronics" },
  { name: "Jeans", category: "Clothing" },
  { name: "Headphones", category: "Electronics" }
];

const groupedByCategory = products.reduce(function(acc, product) {
    if (!acc[product.category]) {
        acc[product.category] = [];   // pehle naya array banao (agar exist nahi karta)
    }
    acc[product.category].push(product.name);   // phir hamesha push karo (chahe naya ho ya purana array)
    return acc;   // <-- ye line add karo!
}, {});

// acc ik khali obj hai tw if check krta hai product.category (electronics) nam ki koi property hai agr hai tw naam push kro usmy agr nh hai tw array banao pahly chunky ismy koi property hai hi nh esy isliye pahly array banyga then push 



const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruits.reduce(function(acc, fruit) {
  acc[fruit] = (acc[fruit] || 0) + 1;  // javascript object me propertty khudhi bana raha hai
  return acc;
}, {});


let acc = {};        // bilkul khaali object

acc["apple"] = 1;    // "apple" naam ki property object mein maujood nahi thi
                      // JavaScript ne khud bana di, aur value 1 rakh di

console.log(acc);    // { apple: 1 }


// { apple: 3, banana: 2, orange: 1 }


// 6. Cart ka total bill (quantity ke saath)

const cart = [
  { item: "Book", price: 500, qty: 2 },
  { item: "Pen", price: 20, qty: 5 }
];

const grandTotal = cart.reduce((acc, product) => acc + (product.price * product.qty), 0);
// 1100





// Ek array ko doosre format mein convert karna 

const words = ["Main", "JavaScript", "seekh", "rahi", "hun"];
const sentence = words.reduce((acc, word) => acc + " " + word);
// "Main JavaScript seekh rahi hun"


