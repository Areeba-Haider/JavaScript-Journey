// Array: [3, 8, 15, 22, 6]
// Find() use karke wo pehla number dhoondo jo 20 se bada ho.


arr=[3 ,8, 15, 22,6 ];
let value = arr.find(num => num >20)  // num many khud se temporaray variable banaya hai jissy element kehty hain
console.log( value);


// Array: ["Ali", "Muhammad", "Zain", "Abdullah"]
// Find() use karke wo pehla naam dhoondo jiski length 4 se zyada ho.

let nAme = ["Ali", "Muhammad", "Zain", "Abdullah"];

let value1= nAme.find(str => str.length>4); // first match value deta hai
console.log(`use of find() ${value1}`);


let valuefilter = nAme.filter(str1 => str1.length>4); // pora array check krta hai
console.log(`use of filter() ${ valuefilter}`);


// Array: [10, 25, 30, 15, 5]
// Find() use karke, index parameter ki madad se, wo number dhoondo jo array ke index number 3 pe ho (value pe condition mat lagao, sirf index check karo).

let number = [10, 25, 30, 15, 5];

let value2 = number.find((num, index) => {
  console.log(`Ye value ${num} hai, aur ye index ${index} pe hai`);
  return index === 3;
});

console.log("index 3 milgaya ispy ye value hai  " + value2 );



// Array: [12, 45, -3, 67, -8, 90]
// Find() use karke wo pehla negative number dhoondo (yaani jo 0 se chhota ho).

let negNumber = [12, 45, -3, 67, -8, 90];

let answer = negNumber.find( num => num < 0);

console.log( "negative number is = " + answer);

