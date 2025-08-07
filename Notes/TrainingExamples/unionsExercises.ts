let highScore: number | boolean;

const stuff: number[] | string[] = [];

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

type SkiSchoolStudent = {
    name: string;
    age: number;
    sport: "ski" | "snowboard";
    level: SkillLevel;
}

type RGBColor = {
    r: number;
    g: number;
    b: number;
}
type HSLColor = {
    h: number;
    s: number;
    l: number;
}
const colourArray: (RGBColor | HSLColor)[] = [];

function greet(names: string | string[]): void {
    if (typeof names === "string") {
        console.log(`Hello, ${names}`)
    } else {
        names.map((name) => {
            console.log(`Hello, ${name}`)
        })
    }
}

greet("bob");
greet(["Bob", "sam", "boo"])