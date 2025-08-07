"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

class Player {
    static description = "Player In Our Game"; // static means it exists on the class (not the individual instances) and cannot be changed per instance
    
    // set default initial values for all players
    #score = 0; // property that starts with a hash tells JS this should only be usable inside the player class (private element)
    numLives = 10;

    // set initial values for this player when initialised
    constructor(first, last){
        this.first = first;
        this.last = last;
        // this.#secret();
    };

    // getters & setters
    get fullName(){
        return `${this.first} ${this.last}`
    }
    get score(){
        return this.#score;
    }

    set fullName(name){
        const playerName = name.split(" ");
        this.first = playerName[0];
        this.last = playerName[1];
    }
    set score(newScore){
        if (newScore < 0) {
            throw new Error("Score must be positive");
        }
        this.#score = newScore;
    }

    // methods
    // getScore(){
    //     return this.#score;
    // }
    // updateScore(newScore){
    //     this.#score = newScore;
    // }
    taunt(){
        console.log(`${this.fullName} says BOO`);
    };
    loseLife(){
        this.numLives -= 1;
    }
    // #secret(){
    //     console.log("called a private element from within the class")
    // }

    // static classOnlyMethod() {
    //     console.log('only exists on the class, cannot be called on an instance');
    // }
}

class AdminPlayer extends Player {
    constructor(first, last, powers){
        super(first, last); // references the constructor of the parent (aka super) class
        this.powers = powers; // only exists for child class constructor
    }
}

const adminPlayer1 = new AdminPlayer("Jen", "Admin", ["delete", "restore"])
adminPlayer1.taunt();
console.log(adminPlayer1);

// const player1 = new Player("Blue", "Steele");
// console.log('admin? ' + player1.isAdmin); // doesn't exist on Player, only on AdminPlayer
// player1.taunt();

// using getters and setters (which are nicer ways of working with private elements & constructed elements)
// console.log(player1.score)
// player1.score = 21;
// console.log(player1.score)
// player1.score = -21;
// console.log(player1.score)

// player1.fullName = "Bob Adams";
// console.log(player1.first);
// console.log(player1.last);
// console.log(player1.fullName);

// console.log("LIVES")
// console.log(player1.numLives);
// player1.loseLife();
// console.log(player1.numLives);

// using methods for the class with private elements
// console.log("SCORE");
// console.log(player1.getScore());
// player1.updateScore(21);
// console.log(player1.getScore());

// console.log(player1.description) // doesn't exist
// console.log(player1.classOnlyMethod()) // doesn't exist
// console.log(Player.description)
// console.log(Player.classOnlyMethod())


