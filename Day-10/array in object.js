<<<<<<< HEAD
/*

Value nikalna (accessing)
Chunke activities ek array hai, isliye ismein se koi specific value nikalne ke liye humein do cheezein karni hongi:

Pehle object mein jao (company)
Phir us property tak pahuncho jo array hai (activities)
Phir array ke andar index number se value nikalo (jaise arrays mein karte hain)

let activity = company.activities[1];


company → is object mein jao
.activities → is property tak pahuncho, jo ek array hai
[1] → is array ke index 1 pe jo value hai, woh nikaalo

Chunke arrays 0 se start hote hain, index 1 ka matlab hai dusri value:

index 0 → "food manufacturing"
index 1 → "improving kids' health" ✅ (yehi milega)
index 2 → "manufacturing toys"

Yaad rakhne wali baat
Jab bhi object ke andar array ho, to ussay access karne ka pattern hamesha yeh hoga:
objectName.propertyName[indexNumber] */

company = {
  companyName: "Healthy Candy",
  activities: ["food manufacturing", "improving kids' health", "manufacturing toys"],
  address: {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
  },
  yearOfEstablishment: 2021
};

console.log(company.activities[2]);

company.activities.push("sweetcandy")

console.log(company.activities);

=======
/*

Value nikalna (accessing)
Chunke activities ek array hai, isliye ismein se koi specific value nikalne ke liye humein do cheezein karni hongi:

Pehle object mein jao (company)
Phir us property tak pahuncho jo array hai (activities)
Phir array ke andar index number se value nikalo (jaise arrays mein karte hain)

let activity = company.activities[1];


company → is object mein jao
.activities → is property tak pahuncho, jo ek array hai
[1] → is array ke index 1 pe jo value hai, woh nikaalo

Chunke arrays 0 se start hote hain, index 1 ka matlab hai dusri value:

index 0 → "food manufacturing"
index 1 → "improving kids' health" ✅ (yehi milega)
index 2 → "manufacturing toys"

Yaad rakhne wali baat
Jab bhi object ke andar array ho, to ussay access karne ka pattern hamesha yeh hoga:
objectName.propertyName[indexNumber] */

company = {
  companyName: "Healthy Candy",
  activities: ["food manufacturing", "improving kids' health", "manufacturing toys"],
  address: {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
  },
  yearOfEstablishment: 2021
};

console.log(company.activities[2]);

company.activities.push("sweetcandy")

console.log(company.activities);

>>>>>>> 5479abd (Array in object)
