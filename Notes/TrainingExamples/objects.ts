const dog = {
    name: "Elton",
    breed: "Australian Shepherd",
    age: 0.5
}

// passing an object to a function param
const printNameOne = (person: { first: string, last: string }): void => {
    console.log(`${person.first} ${person.last}`)
}

printNameOne({ first: "Bob", last: "Smith" })
printNameOne({ last: "Bob", first: "Smith" })

// ==================================

// this one isn't used much but is possible
let coordinateOne: { x: number, y: number } = { x: 34, y: 7 }
// object literal first braces is the type, second braces is the values
// set the pattern, then make it follow the pattern

// first set of braces denote object type that is returned by function
// second set of braces denotes the function
function randomCoordinateBad(): { x: number, y: number } {
    return {}
}

function randomCoordinateOne(): { x: number, y: number } {
    return { x: Math.random(), y: Math.random() }
}

// =====================================
// object params in functions

printNameOne({ first: "Mick", last: "Jagger", age: 70 });

const singer = { first: "Mick", last: "Jagger", age: 70 }
printNameOne(singer);

// if you pass it as an object literal in the function call it prevents you passing extra stuff
// if you define it as a variable first then it only checks for the properties outlined and excess properties are ignored
// this is just a TypeScript choice

// ==========================
// Alises

let coordinate: { x: number, y: number } = { x: 34, y: 7 }

function randomCoordinate(): { x: number, y: number } {
    return { x: Math.random(), y: Math.random() }
}

function doublePoint(point: { x: number, y: number }): {
    x: number,
    y: number
} {
    return { x: point.x * 2, y: point.y * 2 }
}

// the above are repeating the type across multiple functions
// we can change that to an alias to be reused

type Point = {
    x: number,
    y: number
}

function randomCoordinateAlias(): Point {
    return { x: Math.random(), y: Math.random() }
}

function doublePointAlias(point: Point): Point {
    return { x: point.x * 2, y: point.y * 2 }
}

// alias very useful for object types
// you can make a primitive type if you want
// maybe useful for consistency across files?
type Identity = number;

// ================================
// Nested objects

type Song = {
    title: string,
    artist: string,
    numStreams: number,
    credits: {
        producer: string,
        writer: string
    }
}

function calculatePayout(song: Song): number {
    return song.numStreams * 0.0033
}

function printSong(song: Song): void {
    console.log(`${song.title} - ${song.artist}`)
}

const mySong: Song = {
    title: "Unchained Melody",
    artist: "Righeous Brothers",
    numStreams: 12312312,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
}

const brokenSong: Song = {
    title: "Unchained Melody",
    artist: "Righeous Brothers",
    numStreams: 12312312,
    producer: "Phil Spector",
    writer: "Alex North"
}

calculatePayout(mySong);
printSong(mySong);
printSong(brokenSong);

// ==============================
// optional properties

type PointD = {
    x: number,
    y: number,
    z?: number,
}

const myPoint: PointD = { x: 1, y: 3 }
const myPoint2: PointD = { x: 1, y: 3, z: 2 }

// =====================================
// readonly modifier
// mark properties as readonly so typescript errors if we try to write to those properties

type User = {
    readonly id: number,
    username: string;
}

const user: User = {
    id: 1234, // first time of setting it, this is valud
    username: "Catgirl"
}

console.log(user.id);
user.id = 321 // its been set you cannot change it

// ==============================
// intersection type
// can have multiple types and combine with &

type Circle = {
    radius: number
};

type Colorful = {
    color: string
};

type ColorfulCircle = Circle & Colorful

const happyFace: ColorfulCircle = {
    radius: 4,
    color: "yellow"
}

type Cat = {
    numLives: number
}
type Dog = {
    breed: string
}

type CatDog = Cat &
    Dog & {
        age: number
    }

const christy: CatDog = {
    numLives: 7,
    breed: "Husky",
    age: 12
}