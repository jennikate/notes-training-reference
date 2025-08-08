// class Player {
//     // PROPERTIES

//     // by default every property and method in a class is considered public
//     // everything (inside or outside the class) can access what's inside the class (e.g. call a var, call a method)
//     // you can use a public class to make it VERY clear things are meant to be public
//     public readonly first: string; // once you give it an initial value, it can't be changed
//     public readonly last: string;

//     // private means only the class can access this property or method
//     // you can create them using the JS notation of # or you can do it with the TS private syntax
//     // private modifier only errors before the code is compiled whereas # errors at runtime
//     // TS will still compile this into valid JS, it doesn't create the # syntax
//     // which if you don't have the correct checks in place to stop it compiling with errors
//     // then it will make it into your JS as a public property/method
//     private example: string = "boo";  // alternatively here TS infers the type if you just do score = 0;

//      protected is another TS Class - which comes into play when you are inheriting classes
//      this lets children classes access the property, but still restricts external from accessing it
//      protected score: number = 0;


//     constructor(first: string, last: string) {
//         // we have to tell TS what the type of the var's within the constructor are
//         // before we can then use this.<var> and initialise/assign values
//         this.first = first;
//         this.last = last;
//     }

//     // METHODS
//     private secretMethod(): void {
//         console.log("SECRET");
//     }
// }

// ======
// shortcut version

class Player {
    // PROPERTIES
    // private score: number = 0;  // alternatively here TS infers the type if you just do score = 0;

    constructor(
        public first: string,
        public last: string, // available to all
        protected _score: number, // available to this class and child classes
        private _example: string // available in this class only
    ) {
        // declaring public/private within the constructor params
        // lets TS know these are properties for the class
        // and based on position they're passed in
        // TS will convert them to this.first = first etc. on compile
    }

    // GETTERS & SETTERS
    // TS will default these properties to readonly if there is no 
    // setter for it
    get fullName(): string {
        return `${this.first} ${this.last}`
    }

    get score(): number {
        return this._score;
    }
    set score(newScore: number) {
        if (newScore < 0) {
            throw new Error("Cannot be less than 0")
        }
        this._score = newScore;
    }

    // METHODS
    private secretMethod(): void {
        // console.log("SECRET");
    }
}

class SuperPlayer extends Player {
    // PROPERTIES
    public isAdmin: boolean = true;

    // METHODS
    maxScore() {
        this._score = 100;
    }
}

const elton = new Player("Elton", "Steele", 7, "simple string");
elton.score = 99
// console.log(elton.score)

// ========================
// interfaces

interface Colorful {
    color: string
}

interface Printable {
    print(): void;
}

class Bike implements Colorful {
    constructor(public color: string) { }
}

class Jacket implements Colorful, Printable {
    constructor(public brand: string, public color: string) { }
    print(): void {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}


const bike1 = new Bike("red");
const jacket1 = new Jacket("Prada", "green");

// console.log(bike1)
// console.log(jacket1.print())


// =====================
// abstract classes
// we define methods that must be implemented by a child class

abstract class Employee {
    // Can include properties and methods as any class can
    constructor(public first: string, public last: string) { }

    // every instance of an Employee subclass must have a method as defined here
    abstract getPay(): number;

    greet() {
        // console.log("hi")
    }
}

class FullTimeEmployee extends Employee implements Colorful {
    color = "green"; // just adding here as an example of implementing an interface as well
    constructor(first: string, last: string, private salary: number) {
        super(first, last)
    }
    getPay() {
        return this.salary;
    }
}

class PartTimeEmployee extends Employee {
    constructor(first: string, last: string, private hourlyRate: number, private hoursWorked: number) {
        super(first, last)
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}

// new Employee(); // cannot create instance of abstract class
const bob = new FullTimeEmployee("bob", "burger", 10);
const sam = new PartTimeEmployee("bob", "burger", 10, 20);
// console.log(bob.getPay())
// console.log(sam.getPay())

// ========================
// Generics

// function doThing(thing: number | string): number | string {
//     // function accepts a single number or string
//     // and returns a single number or string
//     // doesn't indicate which will be returned
//     // and we have to decide within our function what we want to return
// }

// we can write a function that says if I am given a number I return a number
// name of the Interface<type> -> can be a literal, a union, an alias 
const nums: Array<number> = []; // this is a generic, you just provide some type to it, and it returns to us and Array type of numbers
const colors: Array<string> = [] // gives an array of types string
// we still usually use the clearer number[] = [] for this type of declaration though

const inputEl = document.querySelector<HTMLInputElement>("#username")!; // remember ! here removes the null type option as we're sure it will exist
// console.dir(inputEl);
inputEl.value = "Hacked!"

const btn = document.querySelector<HTMLButtonElement>(".btn")!;

// examples
interface Cat {
    name: string
}

// these return the same type as they're passed - you'd need one for each type
function numberIdentity(item: number): number {
    return item;
}
function stringIdentity(item: string): string {
    return item;
}
function booleanIdentity(item: boolean): boolean {
    return item;
}

// you could make it any - but that defeats the purpose of TS, this COULD accept a string and return a number
// which is not what we want, we want to return the same type as you provided
function anyIdentity(item: any): any {
    return item;
}

// instead we can use a generic function
// often see <T> rather than <Type> - you can literally call it whatever you want e.g. MyType, Bob, whatever!
function identity<Type>(item: Type): Type {
    return item;
}

const stringTest = stringIdentity("my string");
const identityTest = identity<number>(7);
const identityTestCat = identity<Cat>({ name: "bob" });
// const identityTestInvalid = identity<string>(7);

// console.log(stringTest);
// console.log(identityTest)


// example two
function getRandomElement<T>(list: T[]): T | undefined {
    if (list.length === 0) throw new Error("List is empty");
    const randIndex = Math.floor(Math.random() * list.length);
    return list[randIndex];
}

// const empty = getRandomElement([]);
const numbers = getRandomElement<number>([4, 5, 6, 7]);
const bools = getRandomElement<boolean>([true, false, false]);
const cats = getRandomElement<Cat>([{ name: "Thor" }, { name: "Loki" }]);

// console.log(numbers);
// console.log(bools);
// console.log(cats?.name);


// inferring type example - for the simpler situations TS can infer the type
// const inferredString = getRandomElement(["a", "b", "c"]);
// console.log(inferredString);
// const inferredNum = getRandomElement([1,2,3,4]);
// console.log(inferredNum);

// =================
// NOTE if you are working with React
// TS gets confused when we use arrow functions
// It thinks the <T> is a html/jsx tag
// so you need a trailing comma <T,>
// (or write it as a function not an arrow function)

// ===============================
// taking multiple parameters that might be of different types
// U is the convention for use as the second generic type (then V etc. follow the alphabet)
function merge<T, U>(object1: T, object2: U) { // TS infers the return type is an intersection of T & U
    return {
        ...object1,
        ...object2
    }
}

let firstItem = {
    name: "Jen",
    count: 7

}
let secondItem = {
    pets: ["Loki", "Thor"]
}


const comboObj = merge(firstItem, secondItem);
// console.log(comboObj);


// =====================
// constraining generics to certain types

// e.g. want to make sure T and U are actual objects
// extends object type is saying it must be an OBJECT, doesn't matter what's in the object
function mergeConstrained<T extends object, U extends object>(object1: T, object2: U) { // TS infers the return type is an intersection of T & U
    return {
        ...object1,
        ...object2
    }
}

const thirdItem = 0;
// const comboConstrainedObjBad = mergeConstrained(thirdItem, firstItem);  // TS will error as it's not an object
// const comboConstrainedObj = mergeConstrained(secondItem, firstItem);  // this is fine, both are objects

// ANOTHER EG
interface Lengthy {
    length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
    return thing.length * 2
}

console.log('double it')
console.log(printDoubleLength({ length: 2 })) // this works beacuse you've passed a value for length, it's not checking the length of the element. Something to consider as that was NOT the aim of length here
// console.log(printDoubleLength(8)) // this fails because a number doesn't have a length
console.log(printDoubleLength("blob")) // this works as it has a length

// ========================
function makeEmptyArray<T>(): T[] {
    return []
}

const strings = makeEmptyArray<string>();
strings.push("bob")
const unknown = makeEmptyArray(); // defaults to unknown

function makeEmptyArrayWithDefault<T = number>(): T[] {
    return []
}

const stringsDefault = makeEmptyArrayWithDefault<string>();
strings.push("bob") // still works
const unknownDefault = makeEmptyArrayWithDefault(); // now defaults to number

// =================
// Generic classes

interface Song {
    title: string;
    artist: string;
}

interface Video {
    title: string;
    creator: string;
    resolution: string;
}

class Playlist<T> { // we genericise the playlist class
    public queue: T[] = [];
    add(el: T){
        this.queue.push(el)
    }
}

const songs = new Playlist<Song>()
// songs.add() // requires the Song type

// const videos = new Playlist<Video>()
// videos.add() // requires the Video type
