export function add(x: number, y:number): number {
    return x + y;
}

export function sample<T>(arr: T[]): T | undefined {
    // takes a type, pass in an array of that type, it returns an item of that type
    // handle array might be empty
    if (arr.length === 0) return undefined;
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

export const pi = 3.124;
