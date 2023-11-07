"use strict"

let menu = [
    [
        { item: "Sausage and Egg Biscuit", price: 3.69 },
        { item: "Bacon and Egg Biscuit", price: 3.49 },
        { item: "Ham and Egg Biscuit", price: 3.29 }
    ],
    [
        { item: "Chicken Sandwich", price: 4.99 },
        { item: "Burger", price: 5.99 },
        { item: "Salad", price: 4.49 },
        { item: "Soup", price: 3.99 }
    ],
    [
        { item: "Steak Dinner", price: 12.99 },
        { item: "Fish and Chips", price: 9.99 },
        { item: "Pasta Primavera", price: 10.49 },
        { item: "Grilled Salmon", price: 11.99 },
        { item: "Vegetarian Platter", price: 8.49 }
    ]
];


let meal = 2

let mealTime;

if(meal == 0){
    mealTime = "Breakfast Menu"
} else if(meal == 1){
    mealTime = "Lunch Menu"
} else{
    mealTime = "Dinner Menu"
}

let itemsInMenu = []

for(let item of menu[meal]){
    itemsInMenu.push(item.item)
}

console.log(mealTime +  ": " + itemsInMenu)
