// Creating our blueprint for a bunch of pumpkin objects
class Pumpkin {
    // create our constructor
    constructor(size="Large", weight=8, type="Field Trip", color="Orange", rotten) {
        this.size = size;
        this.weight = weight;
        this.type = type;
        this.color = color;
        if(rotten == null) {
            let bool = Math.round(Math.random() * 10);
            if(bool <= 5){
                this.rotten = true;
            } else {
                this.rotten = false;
            }
        } else {
            this.rotten = rotten;
        }
    }

    smash(){
        if(!this.rotten){
            this.rotten = true;
            console.log(`You smashed the ${this.type} pumpkin, and now it's just... everywhere.`);
        } else {
            console.log("It's already just kind of mush at this point. There's not much left to smash.");
        }
    }

    printInfo(){
        if(this.rotten == true){
            console.log("Eww, it's all mushy and gross.");
        } else {
            console.log(`This is a ${this.size}, ${this.color} ${this.type} pumpkin, weighing about ${this.weight} lbs.`);
        }
    }
}

class JackOLantern extends Pumpkin {
    constructor(size, weight, type, color, faceType, hasCandle, rotten=false) {
        super(size, weight, type, color, rotten);
        this.face = faceType;
        this.candle = hasCandle;
    }

    // // all jack o lanterns must be the same exact pumpkin
    // constructor(facetype, hascandle){
    //     super("Medium", 5, "Field Trip", "Orange", false);
    // }
    smash(){
        if(this.candle){
            console.log("You tried to smash the jack-o-lantern, but instead your hammer caught fire.");
        } else {
            super.smash();
        }
    }

    // vv This is not necessary
    // printInfo(){
    //     super.printInfo()
    // }

    printInfo(){
        super.printInfo();
        if(!this.rotten){
            if(this.candle){
                console.log(`You see the light flickering through what appears to be a ${this.face} face`);
            } else {
                console.log(`It appears that somebody carved a ${this.face} face out of the pumpkin!`);
            }
        }
    }
}

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.decorations = [];
    }

    buyPumpkin(size, weight, type, color){
        this.decorations.push(new Pumpkin(size, weight, type, color, false));
    }
}



const pump = new Pumpkin("small", 2, "Warty Goblin F1 Hybrid", "orange", false);
// const pump2 = new Pumpkin("medium", 4, "Cotton Candy", "white", true);
const jack = new JackOLantern("medium", 4, "Field Trip", "orange", "Spoopy", true, false);


// // jack.printInfo();
// // pump.printInfo();
// pump.smash();
// // pump2.smash();

// pump.smash();

// console.log(pump);
// console.log(jack);

// jack.smash();

// jack.printInfo();

const notGoat = new Person("Mikey", 22);

notGoat.buyPumpkin("Medium", 4, "Field Trip", "Orange");

console.log(notGoat);