/* Вывести в консоль числа от 20 до 30 через пробел 
используя шаг 0,5 (20 20,5 21 21,5….) */

let str = " ";
for (let step = 20; step <= 30; step = step + 0.5) {
  str += step + " ";
}
console.log(str.trim());

/* Один доллар стоит 39 гривен. Вывести данные с расчетом 
стоимости 10, 20, 30... 100 долларов. 
Оптимальность кода (увеличивать на 10). */

for (let i = 10; i < 110; i = i + 10) {
  console.log(39 * i);
}

// 3) Дано целое число N (ввести через prompt). Вывести все целые
// числа от 1 до 100, квадрат которых не превышает числа N.
// Если N не является числом, то вывести ошибку.

let N = prompt();
if (isFinite(N)) {
  for (let i = 1; i < Math.sqrt(N); i++) {
    if (i ** i < N) {
      continue;
    }
    console.log(i);
  }
} else {
  console.log("Error");
}

// Дано целое число (ввести через prompt). Выяснить, является ли оно
// простым (простым называется число, больше 1,
// не имеющих других делителей кроме 1 и себя).

const numPr = parseInt(prompt());
let numPrPrime = true;
if (numPr === 1) {
  console.log("1 is not prime!");
} else if (numPr > 1) {
  for (let i = 2; i < numPr; i++) {
    if (numPr % i == 0) {
      numPrPrime = false;
      break;
    }
  }
  if (numPrPrime) {
    console.log(`${numPr} The number is prime`);
  } else {
    console.log(`${numPr} The number is not prime!`);
  }
} else {
  console.log("The number is not prime!");
}
