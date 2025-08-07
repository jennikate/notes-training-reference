function square(num) { // num's type defaults to any
    num.toUpperCase();
    num();
    return num * num
};

function squareTwo(numTwo: number) {
    numTwo.toUpperCase();
    numTwo();
    return numTwo * numTwo
};

squareTwo(2);
squareTwo("add")
squareTwo(false)


const doSomething = (person: string, age: number, isFunny: boolean) => {
    return `Hi there, ${person}`
}

doSomething("ChickenFace", 76, false)
doSomething("ChickenFace", 76, false, 123)
doSomething(false, 76, false)
doSomething("ChickenFace", false)


const doSomethingDefault = (person: string = "defaultName", age: number, isFunny: boolean) => {
    return `Hi there, ${person}`
}

doSomethingDefault("ChickenFace", 76, false)
doSomethingDefault("ChickenFace", 76, false, 123)
doSomethingDefault(false, 76, false)
doSomethingDefault("ChickenFace", false)


const doSomethingTwo = ({ person = "defaultName", age, isFunny} : { person: string, age: number, isFunny: boolean }) => {
    return `Hi there, ${person}`
}

doSomethingTwo({ person: "ChickenFace", age: 76, isFunny: false})
doSomethingTwo({ age: 76, isFunny: false, person: "ChickenFace" })
doSomethingTwo({ age: 76, isFunny: false })


// =================================
// return types
// TS can infer the type of the return
function squareThree(numThree: number) { // infers the return is a number
    return numThree * numThree 
};

const greet = (person: string, age: number, isFunny: boolean) => {
    return `Hi there, ${person}`
}

// forgetting the return
function squareFour(num: number) { // infers the return is void (hover on function name)
    num * num 
};

// declaring the return type
function squareFive(num: number): number { // declares the return type is number
    return num * num 
};
function squareSix(num: number): number { // catches if you forgot the return
    num * num 
};

// when return type could be various things
function rando(num: number) {
    if(Math.random() < 0.5) {
        return num.toString(); // string type
    }
    return num; // number type
}

// arrow functions and anonymous functions work the same for where you assign types

// ============================

const colours = ["red", "yellow", "orange"];

colours.map(colour => { // infers colour is a string based on what's in the array
    colour.toFixed();
    return colour.toUpperCase();
});

// =================================

function printTwice(msg: string) { // infers return type is void as we don't return anything
    console.log(msg);
    console.log(msg);
}

function printTwo(msg: string): void { // if we declare it it's much clearer that we expect this function to not return anything
    console.log(msg);
    console.log(msg);
}

function printMany(msg: string): void { // we can also prevent accidentally returning if we don't want it to
    console.log(msg);
    console.log(msg);
    return msg;
}

// =====================
// never type
// should indicate a function doesn't finish executing, e.g. it continually runs in a loop, or it throws an error

function makeError(msg: string): never {
    throw new Error(msg);
}

function makeError(msg: string): never {
    return msg;
}

function gameLoop(): never {
    while(true) {
        console.log('game loop running')
    }
    return true;
}

// void technically returns undefined or null
// we use it when we don't care what returns
// never should never return anything

