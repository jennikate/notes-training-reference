// almost always used with a union though they don't have to be

let zero: 0 = 0; // instead of number, this says it HAS to be 0
zero = 9; // can't change it to anything else
zero = 0;

let hi: "hi" = "hi";
hi = "no";

// Best used when you execpt a variable to be one of a set of literal values
// e.g. "yes", "no", "maybe"

let mood: "Happy" | "Sad" | "Sunny" = "Happy";
mood = "Sad";
mood = "Bad";
mood = "Sunny";

type DayOfWeek =
    | "Mon"
    | "Tue" 
    | "Wed" 
    | "Thu" 
    | "Fri" 
    | "Sat" 
    | "Sun"
    | 0
    | false

let today: DayOfWeek = "Mon";
today = "Monday";
today = false;
today = true;
today = 8;

// ======
// overriding type
// contrived and risky, but if you're getting something from
// external source and it's typed as unknown you can then do this
const mystery: unknown = "Hello World";
const numChars = (mystery as string).length;
