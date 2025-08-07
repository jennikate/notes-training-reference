// let myVar: type = value;
// PRIMITIVE TYPES
let movieTitle: string = "Amadeus";
movieTitle = "Arrival";
movieTitle = 9;
movieTitle.upper();
movieTitle.toUpperCase();
movieTitle();

let myNumber: number = 42;
myNumber = 2;
myNumber = "Seven";
myNumber += 1;

let myBoolean: boolean = true;
myBoolean = false;
myBoolean = "true";

// also exist but rarely used
// symbol
// bigint


// Type Inference
let myString = "string";
myString = 3;

let newNumber = 0;
newNumber = "boo"

// Any Type
let thing: any = "hello";
thing = 1;
thing = false;
thing = [];
thing();
thing.toUpperCase();

// =================================
// delare variable separately from initialising it
const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
let foundMovie; // when we don't annotate a type AND we don't initialize it with a value it has a type of any

for (let movie of movies) {
    if(movie === "Amadeus") {
        foundMovie = "Amadeus"
    }
}

// it's inferred as any so you can still do invalid things
foundMovie();
foundMovie = 1;

// we want to avoid using any when we know what we want the var type to be
const moviesTwo = ["Arrival", "The Thing", "Aliens", "Amadeus"];
let foundMovieTwo: string; // important to add the type and not let it infer it to 'any'

for (let movie of moviesTwo) {
    if(movie === "Amadeus") {
        foundMovieTwo = "Amadeus"
    }
}

// it's inferred as any so you can still do invalid things
foundMovieTwo();
foundMovieTwo = 1;