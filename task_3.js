"use strict";
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
products.forEach(function (price) {
    let new_price = price.price * 0.85;
    console.log(new_price);
})