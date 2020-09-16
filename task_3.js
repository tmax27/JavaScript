"use strict";
// 3 задание
let a = Number(prompt("Введите первое произвольное целое число: "));
let b = Number(prompt("Введите второе произвольное целое число: "));
if (a >= 0 && b >= 0) {
    alert(a - b);
} else if (a < 0 && b < 0) {
    alert(a * b);
} else if (a >= 0 && b < 0 || a < 0 && b >= 0) {
    alert(a + b);
}