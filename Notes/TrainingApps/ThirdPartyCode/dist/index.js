"use strict";
// special files that end in .d.ts -> a type declaration file
// there are no implementation details, no code that is run as js
// they only contain type information
// which TS can look at and use to understand and enforce type declarations on our code
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// and we can use them as documentation
// e.g. console 
// you can right click on this and get the Type Definition
// -> TS knows about this because it is described in lib.dom.d.ts
// ========================
// Working with 3rd party libraries/code -> 3rd party type declaration files
// Axios
const axios_1 = __importDefault(require("axios")); // comes with its own .d.ts file
// within Axios's package.json -> types or typings is a property in the package.json, which tells TS where to find the types
const lodash_1 = __importDefault(require("lodash")); // doesn't have its own .d.ts file
// axios is a generic type, whatever type we pass in is what we expect out on the res
// -> can see this in the axios d.ts file
// so we can declare the interface/alias as the expected response structure
// and assign the type here
axios_1.default
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then(res => {
    console.log('worked');
    const { data } = res;
    // console.log(data.company.slogan); // errors as doesn't exist
    console.log(data.company.catchPhrase);
    printUser(data);
})
    .catch(e => {
    console.log(`error ${e}`);
});
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
}
// to multiple user endpoint -> returns array
axios_1.default
    .get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
    // printUser(res.data) // now errors cause User does not accept an array
    res.data.forEach(printUser);
})
    .catch(e => {
    console.log(`error ${e}`);
});
// =========================
// Most popular js libraries usually have preexisting ts declaration files written for them
// you might just have to install it separatly
// TS docs = Consumption
// e.g. for lodash you npm install --save-dev @types/lodash
// @types is 'Definitely Typed' (see github) which is a project to get types for packages
