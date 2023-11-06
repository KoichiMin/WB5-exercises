"use strict"

let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Jelly Beans", price: 4.99 },
    { product: "Sour Patch Kids", price: 3.49 },
    { product: "Skittles", price: 1.99 },
    { product: "Licorice", price: 2.49 },
    { product: "Tootsie Rolls", price: 0.99 },
    { product: "Milk Duds", price: 2.29 },
    { product: "Twizzlers", price: 1.59 },
];


const filteredProductUnder4 = products.filter((item) => item.price < 4);

// console.log(filteredProductUnder4);

const filteredMM = products.filter((item) =>{
    return item.product.includes("M&M")
})

// console.log(filteredMM)

const findSwedishFish = products.findIndex((item) =>{
    return item.product.includes("Swedish Fish")
})

console.log(findSwedishFish > -1)

