class Card {                // vv for a more advanced build of this program
    constructor(name, cost, /*imgUrl, rarity*/){
        this.name = name;
        this.cost = cost;
        // this.image = imgUrl;
        // this.rarity = rarity;
    }
}

class Unit extends Card {
    constructor(name, cost, /* imgUrl, rarity, */ power, resilience){
        super(name, cost /*, imgUrl, rarity*/);
        this.power = power;
        this.resilience = resilience;
        this.text = `${this.power} Power\n${this.resilience} Resilience`
    }

    attack(target){
        if(target instanceof Unit){
            target.resilience -= this.power;
            console.log(`${this.name} attacks ${target.name}, dealing ${this.power} damage`);
        } else {
            console.log(`${this.name} can only attack another Unit card.`)
        }
    }
}

class Effect extends Card {
    constructor(name, cost, /* imgUrl, rarity, */ stat, magnitude) {
        super(name, cost /*, imgUrl, rarity*/);
        this.stat = stat;
        this.magnitude = magnitude;
        let mod = "";
        if(magnitude > 0){
            mod = "Raise";
        } else {
            mod = "Lower";
        }
        this.text = `${mod} the target's ${this.stat} by ${Math.abs(this.magnitude)}`
    }

    play(target){
        if(target instanceof Unit) {
            if(this.stat == "resilience"){
                target.resilience += this.magnitude;
                console.log(this.text)
            } else if(this.stat == "power") {
                target.power += this.magnitude;
                console.log(this.text)
            } else {
                console.log("That's not an option, moron.");
            }
        } else {
            console.log(`${this.name} can only be played on a Unit card.`);
        }
    }
}
const HardAlgo = new Effect("Hard Algorithm", 2, "resilience", 3);
const Unhandled = new Effect("Unhandled Promise Rejection", 1, "resilience", -2);
const Pair = new Effect("Pair Programming", 3, "power", 2);

// Turn 1
const RedBelt = new Unit("Red Belt Ninja", 3, 3, 4);
HardAlgo.play(RedBelt);

// Turn 2
const BlackBelt = new Unit("Black Belt Ninja", 4, 5, 4);
Unhandled.play(RedBelt);

// Turn 3
Pair.play(RedBelt);
RedBelt.attack(BlackBelt);

console.log(RedBelt);
console.log(BlackBelt);