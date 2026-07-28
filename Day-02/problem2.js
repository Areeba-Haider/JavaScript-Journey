//Clothing Store

oneTshirt = 1200;
TshirtSale = 8;
discountpercentage = 10;
taxpercentage = 5;

shirtStock=25;



totalSale=oneTshirt*TshirtSale;
discountAmount=(totalSale*discountpercentage)/100;
totalAmountafterDiscount=totalSale-discountAmount; 

taxAmount= (totalAmountafterDiscount*taxpercentage)/100;
//Real life me aksar tax discount ke baad wali amount (8640) par lagta hai:

finalAmount= totalAmountafterDiscount +taxAmount;

remainingStock=shirtStock-TshirtSale; //17



console.log("Total Sale:",totalSale);
console.log("Discount Percentage:",discountpercentage);
console.log("Tax Percentage:",taxpercentage);                           
console.log("Total Amount After Discount:",totalAmountafterDiscount);
console.log("Discount Amount:",discountAmount);
console.log("Tax Amount:",taxAmount);
console.log("Final Amount:",finalAmount);
console.log("Remaining Stock:",remainingStock);

stockUpdate = ++remainingStock; //18 
console.log("Stock Update:",stockUpdate);


