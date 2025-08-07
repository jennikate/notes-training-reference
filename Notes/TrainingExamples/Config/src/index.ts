interface Chicken {
    breed: string;
    eggsPerWeek: number;
    name: string;
    age: number;
}

const norma: Chicken = {
    breed: "Silkie",
    eggsPerWeek: 4,
    name: "Norma",
    age: 2
};

function doThing(thing: string){
    console.log(thing)
};

// null and undefined have their own types and you
// with strict checking on, need to explicitly define it
let users: string[] = ["asd", "fdsa"];
users = null;
users = undefined;

let usersNull: string[] | null | undefined = []
usersNull = null
usersNull = undefined;