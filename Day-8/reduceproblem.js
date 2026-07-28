const orders = [
  { customer: "Ali", item: "Book", price: 500 },
  { customer: "Sara", item: "Pen", price: 20 },
 { customer: "Alisha", item: "Charger", price: 900 },
  { customer: "Ali", item: "Laptop", price: 50000 },
  { customer: "Zain", item: "Bag", price: 1500 },
  { customer: "Sara", item: "Notebook", price: 100 },
  { customer: "Ali", item: "Charger", price: 800 }
];


//Tumhe reduce use karke ek naya object banana hai jisme har customer ke naam ke against uska total spending ho (sab uske orders ki prices ka sum).

const newobj = orders.reduce(function(acc,customers)
{
  acc[customers.customer] = (acc[customers.customer] || 0)  + customers.price
  return acc;
},{});

console.log(newobj);