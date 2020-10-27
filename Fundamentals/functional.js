const myNumbers = [23,45,1,3456,83,2134,567,61234,8,467,12,65];

function getEvens(array){
    const evens = [];
    for(let i = 0; i < myNumbers.length; i++) {
        if(myNumbers[i]%2==0){
            evens.push(myNumbers[i]);
        }
    }
    return evens;
}

console.log(getEvens(myNumbers));

// first: map
// real world use is going to be iterating through an array to modify the dom
// start with what we're iterating through
// myNumbers
// then tack on .map

// function convertToli(number){
//     return `<li>${number}</li>`;
// }

// console.log(myNumbers.map(convertToli));

// let's streamline this even more
// console.log(myNumbers.map(function(num){
//     return `<li>${num}</li>`;
// }));

myNumbers.map(num => `<li>${num}</li>`);


// with functional programming

const filteredEvens = myNumbers.filter(num => num%2 == 0);

// console.log(filteredEvens);
// console.log(myNumbers);


function someFunction(someParam){
    console.log(someParam);
    return someParam;
}

someFunction("Tony the Tiger");

const myFunction = someParameter => {
    console.log(someParameter);
    return someParameter;
}


// These two do the same thing
function takeTwo(p1, p2){
    return p1 + p2;
}

const takeTwoArrow = (p1, p2) => p1+p2;