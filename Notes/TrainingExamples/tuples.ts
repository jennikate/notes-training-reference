// tuples are exclusive to TS, not used in JS (converts to a regular array on compile)
// an array type with a fixed length and ordered with a fixed set of types
// e.g. I can say first element must be string, second element string, third element boolean

// tuples are fixed in their length and their type
let RGBColor: [number, number, number] = [255, 0, 255]; // cannot start with an empty array
RGBColor = ["blue", 0, 0];
RGBColor = [0, 0, 0];
RGBColor = [0, 0, 0, 0]

let myTuple: [number, string]; // first element in array MUST be a number, second must be a string
myTuple = [1, "bob"]
myTuple = ["bob", 2]
myTuple = [1, "bob", "more"]

type HTTPResponse = [number, string];
const goodRes: HTTPResponse = [200, "OK"];
goodRes[0] = "200";
goodRes[0] = 201;
// one risk to remember, TS does not prevent you pushing on extra elements after creation
goodRes.push(123); // this does not error even though it is invalid. It's a limitation of tuples
goodRes.pop();
goodRes.pop();
goodRes.pop();
goodRes.pop();

const responsesTwo: HTTPResponse[] = [[404, "Not Found"], [200, "Success"]]
const responsesThree: HTTPResponse§[] = [[404, "Not Found"], []]

// More often than not, creating an object is better than using a tuple due to clarity

