        // Jab aap variable bana dete ho
        // lekin usko koi value assign nahi karte,
        // to JavaScript usko automatically undefined de deta hai.

        let unassigned;
console.log(unassigned);

// "Value abhi tak assign nahi hui."


// null ka matlab hota hai:
// "Is variable ki value abhi empty hai ya unknown hai — aur maine jaan boojh kar empty rakhi hai."
// null lowercase me likhna hota hai.

let empty = null;
console.log(empty);
empty = 0;
console.log(empty);


let terribleThingToDo = undefined;
let lastName;

console.log("Same undefined:", lastName === terribleThingToDo);

let betterOption = null;
console.log("Same null:", lastName === betterOption);