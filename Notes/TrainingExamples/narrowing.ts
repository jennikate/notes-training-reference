// typeof guard
// typeof is great when we know we're working with primatives, not so great with Arrays
function triple(value: number | string) {
    // these won't work because number doesn't have repeat and string can't be multiplied
    // const valNum = value * 3; // value here could be a string or number
    // const strTrip = value.repeat(3);
    const res = typeof value === 'string' ? value.repeat(3) : value * 3;
    // TS knows the second value is a string cause it only reaches there if it is a string, and it knows the second is a number as it can only be a string or number and it's not a string
    return res
}

// truthiness guard
// eliminate falsey values as potential options
const el = document.getElementById("idk"); // could be HTMLElement or null
if (el) {
    console.log(el) // TS knows for sure it is not null because we checked el is truthy
} else {
    el // TS knows this must be null because the only options were HTMLElement or null
}

function printLetters (word?: string) { // word?: string -> optional means could be string or undefined
    if (!word) {
        word // string or undefined here because word could be an empty string which is falsey
        console.log("error")
    } else {
        console.log(word) // TS knows it is a string here cause we've excluded anything falsey already
    }
}

// equality narrowing
function someDemo(x: string | number, y: string | boolean){
    if (x === y) {
        // this is only possible if x is a string and y is a string
        // and they are both the same value
        // NOTE: `===` here, if we used `==` remember that doesn't check the type 3 == "3" could be true TS won't catch this
        console.log(x, y)
    }
}

// in operator
interface Movie {
    title: string;
    duration: number;
}
interface TVShow {
    title: string;
    numEpisodes: number;
    episodeDuration: number;
}

function getRuntime(media: TVShow | Movie) {
    // media.numEpisodes // won't work cause only exists in TVShow
    // typeof media // won't work cause it's always objects for both
    if ("numEpisodes" in media) {
        // TS knows it has to be a TVShow because only TVShow has numEpisodes
        return media.numEpisodes * media.episodeDuration
    }
    return media.duration // knows it has to be a movie here because we returned the TVShow in the above if
}

// instanceof
// works for classes, dates, arrays - anything you can instantiate with the `new` syntax
// eg [1,2,3] instanceof Array : true, 'boo' instance of Date: false

function printFullDate(date: string | Date) {
    // date.toUTCString() // can't use this here as date might be a string
    if (date instanceof Date) { 
        console.log(date.toUTCString()) // we've restricted it to only Date's here
    } else {
        console.log(new Date(date)); // knows has to be string here
    }

    console.log((date instanceof Date ? date.toUTCString() : new Date(date)));
}

class User {
    constructor(public name: string) {}
}
class Company {
    constructor(public name: string) {}
}
function printName(entity: User | Company) {
    // can't use in cause both have same keys 
    if (entity instanceof User) {
        entity
    } else {
        entity
    }
}

// predicates
// we define a function that can tell TS the type of something
interface Cat {
    name: string;
    age: number;
    numLives: 9;
}
interface Dog {
    name: string;
    breed: string;
    age: number;
}

// reusable checker with a type predicate
// param name is type -> animal is Cat (this is the predicate)
// tells TS that if the value is true, then the param passed in is of type Cat
function isCat(animal: Cat | Dog) : animal is Cat{
    return (animal as Cat).numLives !== undefined; // must return a boolean
}

function makeNoise(animal: Cat | Dog): string {
    if (isCat(animal)) {
        animal
        return "meow"
    }
    animal
    return "woof"
}

// good for things lke 'is this a user or an admin' type checks

// discriminated unions
// create a literal property that allows us to narrow
// common keys are kind, type, __type

interface Rooster {
    kind: "rooster"; // we set this to a literal type that we can use
    name: string;
    weight: number;
    age: number;
}
interface Cow {
    kind: "cow"; // they all have 'kind' in common so we can use that
    name: string;
    weight: number;
    age: number;
}
interface Pig {
    kind: "pig";
    name: string;
    weight: number;
    age: number;
}
interface Sheep {
    kind: "sheep";
    name: string;
    weight: number;
    age: number;
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
    animal.kind === "rooster" ? animal : animal // you can see TS works out first is rooster, therefore second is pig or cow
    if (animal.kind === "pig") {
        animal
    } else if (animal.kind === "rooster") {
        animal
    } else if (animal.kind === "cow") {
        animal
    }
    // sheep was added later and isn't handled here, see next
}

// exhaustiveness / never
// make sure we've exhausted all possible options

function getFarmAnimalSoundExhaustive(animal: FarmAnimal) {
    switch (animal.kind) {
        case "pig":
            return "oink";
        case "cow":
            return "moo";
        case "rooster":
            return "cockadoodledoo";
        case "sheep":
            return "baa";
        default:
            // we should never make it here if we handled all cases correctly 
            // never is assignable to every type, but no other type is assignable to never
            // so if we forget to handle an animal, this will error because never cannot equal anything
            const _exhaustiveCheck: never = animal;
            return _exhaustiveCheck;
    }
}

