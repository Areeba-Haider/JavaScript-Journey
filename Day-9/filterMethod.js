
const marks = [45, 78, 32, 90, 55, 21, 88, 60,50];

/*Tumhe ek naya array banana hai jisme sirf wo marks ho jo 50 ya usse zyada hain (yani jo students pass hue).
filter method use karke is naya array ka naam passingMarks rakho, aur socho:

Konsi condition likhni hogi function ke andar?
Kya expected output hoga? */

passingMarks= marks.filter((mark)=>{
result = mark >= 50 ;
return result;
})

console.log(passingMarks);

passingMarks.sort((a,b) => {
     return a - b;
}) 

console.log(passingMarks);


// hamesha naya array deta hai 