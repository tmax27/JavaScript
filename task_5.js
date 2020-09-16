"use strict";
/**
 * Выполнение основных математических операции
 * @param {number} arg1 значение 1 аргумента
 * @param {number} arg2 значение 2 аргумента
 * @param {string} operation название операции
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "сумма":
            return arg1 + arg2;
            break;
        case "разность":
            return arg1 - arg2;
            break;
        case "произведение":
            return arg1 * arg2;
            break;
        case "деление":
            return arg1 / arg2;
            break;
    }
}
let problem = mathOperation(8, 5, "произведение");
alert(problem);