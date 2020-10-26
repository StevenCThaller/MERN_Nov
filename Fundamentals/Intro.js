// Python
// x = 10

// Javascript
var x = 10;
let y = 5;
const z = 15;
// z = 25;

const person = {
    name: "Cody",
    age: 29
};
person.name = "Steven";
person.location = "Seattle";
console.log(person);

// var count = 0;
// let i = 15;
// for(let i = 0; i < 10; i++) {
//     count += i;
//     console.log(i);
// }
// console.log(count);
// console.log(i);


// HOISTING

// Using a var like this
console.log(myName);
var myName = "Cody";

// Javascript reads this as:
var myName;

if(myName == null) {
    // do one thing
} else {
    // do some other thing
}
console.log(myName);
myName = "Cody";


console.log(x);

function MyFunction(){
    console.log(x);

    const x = 15;
}

MyFunction();


// DESTRUCTURING AND SPREAD

let myObj = {
    name: "Cody",
    age: 29,
    email: "sthaller@codingdojo.com",
    password: "mysupersecretpasswordpleasedonttellanyone",
    ssn: 123121234
    //...
};

// "Old" way / "ugly" way
// let name = myObj.name;
// let age = myObj.age;

// destructuring objects
let { name, age, email } = myObj;
console.log(`${name} is ${age} years old and can be contacted at ${email}`)


// spread operator
let { password, ssn, ...restOfTheObject } = myObj;

// thing sent to the front end:
console.log(restOfTheObject);

let myArray = [1,2,3,4,5,6,7,8,9];
let [first, second, third, fourth, ...rest] = myArray;

let whatINeed = myArray[7]
console.log(first)
console.log(third)
console.log(rest)

// Proof of Concept, we'll revisit this later
myObj = { ...myObj, ["name"]: "My New Name" }

console.log(myObj)


