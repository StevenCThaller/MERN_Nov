// function addNumToPersonAge(number){
//     // const x = 10;

//     const x = {
//         name: "Cody",
//         age: 5
//     };

//     x.age += number

//     // x = x + 10;
//     return x;
// }

// console.log(addNumToPersonAge(4));

class Ninja {
    constructor(name, strength, health=3){
        this.name = name;
        this.strength = strength;
        this.health = health;
    }
}

let Cody = new Ninja("Cody", 9);