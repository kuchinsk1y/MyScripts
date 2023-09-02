// 1

// Дано трехзначное число.
// Верно ли, что все цифры одинаковы? ‘333’
// Есть ли среди цифр цифры одинаковые? ‘332’ ‘233’ ‘323’

const num1 = prompt("");
const number3 = num1 % 10;
const number2 = ((num1 - number3) / 10) % 10;
const number1 = num1 / 100;

if (number1 == number2 || number2 == number3 || number1 == number3) {
  console.log("All the numbers are the same");
} else {
  console.log("All numbers are not the same");
}

if (number3 == number2) {
  console.log("The second and third numbers are the same");
} else if (((number1 == number2) != number1) == number3) {
  console.log("The first and third numbers are the same");
} else if (((number1 == number3) != number1) == number2) {
  console.log("The first and second numbers are the same");
} else {
  console.log("No identical numbers");
}

// Определить, есть ли заданное шестизначное число зеркальным? (123321, 147741)

const sixDigit = prompt("Enter a six-digit number");
const num11 = sixDigit % 10;
const num2 = ((sixDigit - num11) / 10) % 10;
const num3 = ((sixDigit - num2) / 100) % 10;
const num4 = ((sixDigit - num2) / 100) % 10;
const num5 = ((sixDigit - num11) / 10) % 10;
const num6 = ((sixDigit - num2) / 10) % 10;

if (num11 === num6 || num2 === num5 || num3 === num4) {
  console.log("right");
} else {
  console.log("error");
}

//  3) Даны 3 числа, определить наибольшее из них.

const num12 = prompt("");
const number11 = num12 / 100;
const number21 = ((num12 - number11) / 10) % 10;
const number33 = num12 % 10;

if (number11 > number21 && number11 > number33) {
  console.log("1 number is the biggest");
} else if (number21 > number11 && number21 > number33) {
  console.log("2 number is the biggest");
} else if (number33 > number11 && number33 > number21) {
  console.log("3 number is the biggest");
} else {
  console.log("2 biggest numbers are equal");
}

/* 4) Логирование пользователя:

Проверить, имеет ли пользователь право доступа в админ панель сайта.

Сначала проверяется логин ли равен admin, если так то спросить пароль у пользователя, который равен mySuperPassword.

Результаты каждого шага выводить в консоль. */

const logIn = prompt("Enter username");
let password = "mySuperPassword";

if (logIn == "admin") {
  console.log("Matches");
  prompt("Enter password");
  if (password == "mySuperPassword") {
    console.log("Matches");
    alert("login successfully");
  } else {
    alert("You do not have access to the site panel");
    console.log("No access");
  }
} else {
  alert("You do not have access to the site panel");
  console.log("No access");
}
