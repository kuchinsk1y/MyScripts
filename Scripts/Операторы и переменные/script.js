// 1 Создать скрипт для сложения, деления, умножения и вычитания двух чисел. Вывод этих результатов.
let a = prompt("введите число 1");
let b = prompt("введите число 2");
console.log(Number(a) + Number(b));
console.log(a - b);
console.log(a / b);
console.log(a * b);

// 2 Создать скрипт, который получает два значения и выводит true, если значения равны, false – если нет.
const userfirstValue = +prompt("введите первое число");
const usersecondValue = +prompt("введите второе число");

if (userfirstValue > usersecondValue || usersecondValue > userfirstValue) {
  console.log(userfirstValue == usersecondValue);
}

// 3 Определить среднее арифмитическое 3 чисел.
const numStr1 = prompt("num1");
const numStr2 = prompt("num2");
const numStr3 = prompt("num3");
console.log((Number(numStr1) + Number(numStr2) + Number(numStr3)) / 3);

// 4 Получить от пользователя 3 строки и вывести их в любом порядке одной командой (конкатенация).
let num11 = prompt("num11");
let num2 = prompt("num2");
let num3 = prompt("num3");
alert(num11 + num2 + num3);

// 5 Разложить по цифрам пятизначное число и вывести в исходном порядке через пробел, пример: 10369 1 0 3 6 9.
let num1 = 10369;
const r1 = num1 % 10;
const r2 = ((num1 - r1) / 10) % 10;
const r3 = ((num1 - r2) / 100) % 10;
const r4 = ((num1 - r3) / 1000) % 10;
const r5 = ((num1 - r4) / 10000) % 10;
console.log(num1);
console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);
console.log(r5);
