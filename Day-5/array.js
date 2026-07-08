
//create an array
let studentMarks=[10,20,30,40,50];

// acces array

console.log( studentMarks);

console.log( "index 0 = " + studentMarks[0]);


for (let marks of studentMarks) {

    console.log(marks);
}

sum = 0;
let average = 0;
// find average of marks
// formula sum/total value


for(let i = 0 ; i < studentMarks.length ; i++){
    sum = sum + studentMarks[i];
}

average = sum / studentMarks.length; 
console.log("sum = " + sum);
console.log("average marks = " + average);




