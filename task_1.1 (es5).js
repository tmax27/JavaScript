"use strict";
// es6

const Product = {
    name: 'phone',
    price: 150,
    make25PercentDiscount() {
        console.log("Этот товар по дисконту 25% стоит: " + (price - (price / 100 * 25)));
    }
}
Product.make25PercentDiscount;