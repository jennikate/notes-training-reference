import Dog from "./Dog";
import { add, multiply, divide } from './utils';
import ShelterDog from "./ShelterDog";

const elton = new Dog("Elton", "Aussie", 0.5);
elton.bark();

const buffy = new ShelterDog("Buffy", "Labrador", 3, "Springs");
buffy.bark();

console.log(add(4, 5));
console.log(multiply(4, 5));
console.log(divide(4, 5));


// ===============
// SOURCE MAPS
// these will help us debug things because we are minifying our code into a bundle file
// it will take things out of the bundle so we can review and debug

// in webpack config `devtool: 'inline-source-map',
// in tsconfig `"sourceMap": true,`

// then in browser, in source/debugger tab, you can see the files within the webpack director
