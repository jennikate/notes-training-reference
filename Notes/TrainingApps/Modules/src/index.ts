import User, { userHelper } from './User.js';
import { add, pi, sample as randomSample } from './utils.js';

const sample = "I have a sample var here";
console.log(add(1,2));
console.log(randomSample([1,2,3,4]));
console.log(pi);
console.log(new User("Jane", "email@email.com"));
console.log(userHelper());

// We specify in tsconfig what type of module setup/usage we want
// `"module": "es6",`

// We want in our index.html where we call the JS that it's module type
// `<script type="module" src="dist/index.js"></script>

