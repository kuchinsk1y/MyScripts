/* 1. Создать массив, длину и элементы которого задает пользователь
(через prompt) (повторяется промпт, пока пользователь не нажмет кэнсэл).
Затем отсортировать массив по росту. Затем, удалить элементы из массива 
со 2 по 4. По мере изменений выводить содержимое массива в консоль. */

let flag = true;
let numSet = [];

while (flag) {
  number = prompt();
  flag = number == null ? false : true;
  if (flag === false) {
    break;
  }
  numSet.push(number);
  console.log(number);
}
console.log(`Debug message: Array from keyboard: ${numSet}`);

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
numSet.sort(compareNumeric);
console.log(`Debug message: Sort: ${numSet}`);
numSet.splice(1, 3);
console.log(`Debug message: Delete elem. : ${numSet}`);

/* Найдите минимальный элемент массива и 
его порядковый номер. */

const numsArr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, 235, 4, 47, 5,
];
const numsArrMin = Math.min(...numsArr);
const numsArrMin_Position = numsArr.indexOf(numsArrMin) + 1;

console.log(numsArrMin, numsArrMin_Position);

// Найдите максимальный элемент массива и
// его порядковый номер.

const numsArrs = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, 235, 4, 47, 5,
];
const numsArrMax = Math.max(...numsArrs);
const numsArrMax_Position = numsArrs.indexOf(numsArrMax) + 1;
console.log(numsArrMax, numsArrMax_Position);

// Определить количество отрицательных элементов.
const numsArray = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, 235, 4, 47, 5,
];

positive = [];
negative = [];

for (let i = 0; i < numsArray.length; i++) {
  numsArray[i] >= 0 ? positive.push(numsArray[i]) : negative.push(numsArray[i]);
}
let result = "Negative numbers amount: " + negative.length;
console.log(result);

// Найти количество нечетных положительных элементов.

for (let i in numsArray) {
  if (numsArray[i] > 0 && numsArray[i] % 2 != 0) console.log(numsArray.length);
}

//  Найти сумму четных положительных элементов.

const numssArr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, 235, 4, 47, 5,
];

var sumNumsArr = numssArr.reduce((res, item, index) => {
  if (index % 2 !== 0) res += item;
  return res;
}, 0);

console.log(sumNumsArr);

// Найти произведение положительных элементов.

let sum = 1;
for (let i = 0; i < numssArr.length; i++) {
  if (numssArr[i] > 0) {
    sum = sum * numssArr[i];
  }
}

console.log(sum);

/* Найти самый большой среди элементов массива,
остальное обнулить. */

const nuumsArray = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, 235, 4, 47, 5,
];
let max = -Infinity;
let maxi = -1;

for (let i = 0; i < nuumsArray.length; i++) {
  if (nuumsArray[i] > max) {
    max = nuumsArray[i];
    if (maxi > -1) nuumsArray[maxi] = 0;
    maxi = i;
  } else {
    nuumsArray[i] = 0;
  }
}
console.log(nuumsArray);

/* 2. Дан массив 
Найти сумму положительных значений и количество положительных элементов. */

const numsAArr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, 235, 4, 47, 5,
];

let resultt = 0;
for (let i = 0; i < numsArr.length; i++) {
  if (numsArr[i] > 0) {
    resultt += numsArr[i];
  }
}
console.log(resultt);
