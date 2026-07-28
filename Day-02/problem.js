// Real Life Problem: Mobile Shop

// Ek mobile accessories shop me Ali charger bechta hai.

// 1 charger ki price = Rs. 850
// Aaj usne 7 chargers beche.
// Customer ko Rs. 500 discount diya.
// Phir shop owner ne stock update kiya:
// Starting stock = 20 chargers
// Har sale ke baad stock 1 se kam hota hai (-- use karo).
// Agla shipment aaya to stock me 1 charger add hua (++ use karo).



// Tumhe calculate karna hai:
// Total sale kitni hui?
// Discount ke baad amount kitna bacha?
// Remaining stock kitna hai?
// Agar console.log(++stock); likhen to output kya hoga?
// Agar uske baad console.log(stock++); likhen to output kya hoga?
// Aur akhir me console.log(stock); kya print karega?

let oneCharger = 850;
let totalChargersSale = 7;
let discount = 500;
let startingStock = 20;

let totalSale = oneCharger * totalChargersSale;
let amountAfterDiscount = totalSale - discount;
let remainingStock = startingStock - totalChargersSale;
let stockAfterAdded = remainingStock++; //



console.log ("Total Sale :" + totalSale);
console.log ("Amount After Discount:" + amountAfterDiscount);
console.log ("Remaining Stock:" + remainingStock);
console.log ("Stock After Added:" + stockAfterAdded);






