

let number = +prompt("Enter a number");
 
if (number >= 21) {
    console.log(" confirm entry to a venue and the ability to purchase alcohol");
} else if (number >= 19) {
    console.log("confirm entry to the venue but deny the purchase of alcohol");
} else {
    console.log("deny entry");
}