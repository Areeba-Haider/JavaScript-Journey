

// random number between 0 and 1
let randomNumber = Math.random();


// multiply by 10 to obtain a number between 0 and 9
//randomNumber = randomNumber * 10; 

// agr mujhy 1 se 10 tak chahiye tw me 1 add krdogy
//randomNumber = randomNumber * 10 + 1;


//Jaise 3 se 7 chahiye ho. Ginte hain: 3, 4, 5, 6, 7 → 5 numbers.
//Same 3 kaam, bas last mein +1 ki jagah +3 karenge (kyunke range 3 se shuru ho rahi hai).
randomNumber = randomNumber * 5 + 3
// removes digits past decimal place to provide a whole number
randomNumber = Math.floor(randomNumber); 

console.log(randomNumber);
//Jitne numbers chahiye, utne se multiply karo.
//Agar 6 numbers chahiye → multiply by 6
//Agar 9 numbers chahiye → multiply by 9
//Agar 20 numbers chahiye → multiply by 20


// Ab apna 5 se 8 wala example check karte hain:
// Step 1: Ginte hain — 5 se 8 mein kitne numbers?
// 5, 6, 7, 8 → 4 numbers
// Step 2: To multiply by 4 hoga
// Step 3: Add by 5 hoga (kyunke range 5 se shuru hoti hai)




let min = 4; //counting yaha se start hoga
let max = 9;  // counting yaha se end hoga

let result = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(result); // har baar , 4, 5, 6, 7ya 8 ya 9 milega





















































