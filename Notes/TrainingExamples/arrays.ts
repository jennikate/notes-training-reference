const activeUsers: [] = [] // this tells TS it is an EMPTY array, always empty
activeUsers.push("steven")

const users: string[] = [] // we specify the type of items that can go in the array
const numbers: number[] = []

users.push("steven")
users.push(1)
numbers.push(1)

numbers[0] = 12
numbers[0] = "steven"

// =========================================
// Alternate syntax
// this style is used in other areas too

const names: Array<string> = [] // equiv to string[]
const bools: Array<boolean> = [] // equiv to boolean[]

// ==============================
// Custom types

type Points = {
    x: number,
    y: number
}

const coords: Point[] = []
coords.push({ x: 23, y: 8 })
coords.push({ y: 8 })
coords.push({ x: true, y: "hi" })

// ===================================
// Multi diemnsional arrays

const board: string[] = [["X", "O", "X"], ["X", "O", "X"], ["X", "O", "X"]] // it's an array of arrays
const board: string[][] = [["X", "O", "X"], ["X", "O", "X"], ["X", "O", "X"]] // this says I want a 2 dimensional array

const demo: number[][][] = [[[1]]] // this says I want a 3 diemensional array

// ==========================================
