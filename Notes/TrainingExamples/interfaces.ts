// interfaces and type aliases serve almost the exact same purpose with a slightly different syntax

// interface doesn't have = like type alias does
// interfaces are ONLY for OBJECTS, they don't work for unions you have to use type alias there


interface Point {
    x: number;
    y: number;
}
const pt: Point = { x: 123, y: 123 }

// ====================
// read only and optional interface properties

interface Person {
    readonly id: number;
    first: string;
    last: string;
    nickname?: string; // optional
    age: number;
}

const thomas: Person = {
    id: 1,
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom",
    age: 22
}
const thomason: Person = {
    id: 2,
    first: "Thomason",
    last: "Hardy",
    age: 22
}

thomas.first = "Tom";
thomas.id = 3; // not allowed as is read only

// ==========================
// interface methods

interface User {
    readonly id: number;
    first: string;
    last: string;
    nickname?: string; // optional
    sayHi: () => string  // other way to write it is (can use arrow syntax or not) `sayHi(): string`
    // we are not writing a function here, we are declaring it must be a method
    // we describe the number of arguments and what they look like
    // in the above example we are declaring it has no arguments
}

const hiThomas: User = {
    id: 2,
    first: "Thomason",
    last: "Hardy",
    sayHi: () => { return "Hello" }
}

const hiThomasBad: User = {
    id: 2,
    first: "Thomason",
    last: "Hardy",
    sayHi: (name: string) => { return "Hello" }
}

interface Product {
    name: string,
    price: number,
    applyDiscount(discount: number): number;
}

const shoes: Product = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount(amount: number) { // this does not have to match the name of the param, but needs to just be the same type 
        return this.price * (1 - amount);
    }
};

console.log(shoes.applyDiscount(0.4));

// ===============================
// adding new properties - can be done with interfaces but not type aliases
// say an interface is in another file, or coming from a 3rd party library and you want to add another property on here

// e.g. if this is in another file/library
interface Dog {
    name: string;
    age: number;
}

// and now in my app
interface Dog {
    breed: string;
    bark(): string;
}

// I need all 4 elements to create a Dog
const elton: Dog = {
    name: "Elton",
    age: 1,
    breed: "Australian Shepherd",
    bark() {
        return "Woof"
    }
}

// ========
// extend/inherit
// similar to OOP where you have a class that can inherit from a parent class

interface ServiceDog extends Dog {
    job: "drug" | "bomb" | "guide"
}

const bob: ServiceDog = {
    name: "bob",
    age: 2,
    breed: "collie",
    bark() {
        return "Woof"
    },
    job: "guide"
}


// when we extend we can extend multiple interfaces

interface Staff {
    name: string;
}

interface Employee {
    readonly id: number;
    email: string
}

interface Engineer extends Staff, Employee {
    level: string;
    languages: string[];
}

const pierre: Engineer = {
    name: "Pierre",
    id: 12,
    email: "pierre@email.com",
    level: "junior", 
    languages: ["one", "two"]
}

// Why/When interfaces vs type aliases?
// intefaces can only describe the shape of an object : type aliases can describe any type, function, union literals, etc.
// we can reopen and add on elements to interfaces after they've been created
// extending/inheriting from another interface we can use the extends keyword with interfaces : type aliases have to use intersectio types with the &
// --- inheritance/extension is more OOP and more familiar for class extention




