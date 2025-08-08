export function add(x, y) {
    return x + y;
}
export function sample(arr) {
    // takes a type, pass in an array of that type, it returns an item of that type
    // handle array might be empty
    if (arr.length === 0)
        return undefined;
    var idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}
export var pi = 3.124;
