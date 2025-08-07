# Style Guide

## semi colons over commas
https://www.typescriptlang.org/docs/handbook/2/objects.html
The handbook uses `;` to declare the end of each variable in a custom type.
This also makes it easier at a glance to distinguise a type alias/interface over an object which always uses `,`

e.g.
type Person = {
    name: string;
    age: number;
}

const Amelia: Person = {
    name: "Amelia",
    age: 33
};

function greetPerson(person: { name: string; age: number }) {
    return `Hi ${person.name}`;
}

console.log(greetPerson({ name: "Amelia", age: 33 }));