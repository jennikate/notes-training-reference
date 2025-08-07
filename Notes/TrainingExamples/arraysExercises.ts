const ages: number[] = []; // could also use Array<number>
const gameBoard: string[][] = [];

type Product = {
    name: string;
    price: number;
}
const productList: Product[] = [
    { name: "coffee mug", price: 11.50},
    { name: "coffee mug", price: 3.50},
    { name: "coffee mug", price: 1}
]

function getTotal(products: Product[]): number {
    return products.reduce((acc, cur) => acc + cur.price, 0)
}
console.log(getTotal(productList));