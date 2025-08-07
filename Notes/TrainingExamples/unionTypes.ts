// a variable may be a number or string or bool etc.
// a function may take a number or string or bool etc.
// we don't use it if we know the variable will be a certain type at runtime
// e.g. if we KNOW age is always a number, just set the type to number
// but if we don't know if its coming as a number or a string (e.g. from an external input)
// we can use a union

let age: number | string = 21;
age = 23;
age = "24";

// can chain as many as you need
let testAny: number | string | boolean = 21;
testAny = 23;
testAny = "24";
testAny = true

type PointUnion = {
    x: number;
    y: number;
};

type Loc = {
    lat: number;
    long: number;
};

let coordinates: Point | Loc;
coordinates = { lat: 232, long: 1232 }
coordinates = { x: 1, y: 2 }

// ===============================
// with functions

function printAge(age: number | string): void {
    console.log(`You are ${age} years old`);
}
printAge(33);
printAge("87");

// =======================
// Type narrowing
// when functions need the var to be a specific type

function calculateTaxBad(price: number | string, tax: number): number {
    price.replace("$", "")
    return price * tax
}

function calculateTax(price: number | string, tax: number): number {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""))
    }
    return price * tax
}

function calculateTaxString(price: number | string, tax: number): string {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""))
    }
    return `${price * tax} tax`
}

console.log(calculateTaxString(45, .07))
console.log(calculateTaxString("$45", .07))

// =====================================
// arrays

const stuffNum: number[] = [1,2,3,4];
const stuffAny: any[] = [1,2,3,4, {}, "asd"]; // this is broad we want to avoid any whenever we can
const stuffMulti: (number | string)[] = [12, "string"]; // it's an array of number or string
const stuffMultiTwo: number | string[] = [12, "string"]; // it's a number or an array of strings - because no brackets
const stuffMultiThree: number[] | string[] = [12, 1, "string"]; // it's an array of numbers OR an array of strings

const coordsNew: (PointUnion | Loc)[] = []
coordsNew.push({lat: 1, long: 2})
coordsNew.push({x: 1, y: 2})
coordsNew.push({x: 1, y: "bad"})