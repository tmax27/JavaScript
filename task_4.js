"use strict";
// 4 задание
/**
 * Даны 4 функции, выполняющие 4 основные арифметические операции (сложение, вычитание, умножение, деление)
 * @param {number} a пояснение для "a"
 * @param {number} b пояснение для "b"
 * @returns {number} пояснение для возвращаемого значения
 */
function sum(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

let result_1 = sum(4, 1);
let result_2 = subtraction(4, 1);
let result_3 = multiply(4, 1);
let result_4 = division(4, 1);
alert("Сумма: " + result_1);
alert("Разность: " + result_2);
alert("Произведение: " + result_3);
alert("Деление: " + result_4);