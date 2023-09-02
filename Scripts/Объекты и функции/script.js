/* 1 Дан массив объектов. Вывести массив телефонных номеров пользователей 
у которых баланс больше 2000 долларов. 
Вывести сумму балансов всех пользователей. */

let users = [
  {
    index: 0,
    isActive: true,
    name: "John Doe",
    balance: "$2,226.60",
    phone: "+1 (840) 583-3207",
  },
  {
    index: 1,
    isActive: true,
    name: "Merry Hope",
    balance: "$2,778.05",
    phone: "+1 (856) 599-3450",
  },
  {
    index: 2,
    isActive: true,
    name: "Eugene Stakidis",
    balance: "$730.10",
    phone: "+1 (840) 333-5400",
  },
  {
    index: 2,
    isActive: true,
    name: "Stan Smith",
    balance: "$5,001.50",
    phone: "+1 (839) 121-3044",
  },
  {
    index: 3,
    isActive: true,
    name: "Johnatan Tape",
    balance: "$3,020.60",
    phone: "+1 (839) 003-5579",
  },
  {
    index: 4,
    isActive: true,
    name: "Aaron Big",
    balance: "$1,999.99",
    phone: "+1 (840) 033-6873",
  },
  {
    index: 5,
    isActive: true,
    name: "Artur Cheese",
    balance: "$2,545.00",
    phone: "+1 (840) 562-3790",
  },
];

for (let i = 0; i < users.length; i++) {
  let str = users[i].balance;
  let strTwo = str.slice(str.indexOf("$") + 1, str.indexOf("$") + 2);
  if (str.includes(",")) {
    strThree = str.slice(str.indexOf(",") + 1);
  } else {
    strThree = str.slice(str.indexOf("$") + 2);
  }
  let trueBalance = parseFloat(strTwo + strThree);
}

let arrOne = [];
let sumBalance = 0;

for (let i = 0; i < users.length; i++) {
  let str = users[i].balance;
  let strTwo = str.slice(str.indexOf("$") + 1, str.indexOf("$") + 2);
  if (str.includes(",")) {
    strThree = str.slice(str.indexOf(",") + 1);
  } else {
    strThree = str.slice(str.indexOf("$") + 2);
  }
  let trueBalance = parseFloat(strTwo + strThree);
  sumBalance += trueBalance;

  if (trueBalance >= 2000) {
    arrOne.push(users[i].phone);
  }
}
console.log(
  `An array of their phone numbers of those who have more than $2000 on their balance: ${sumBalance}$`
);
console.log(
  `An array of their phone numbers of those who have more on their balance 2000$:    | ${arrOne}`
);

/* 2 Реализовать функцию removeElement(array, item) 
чтобы удалить элемент item из массива array. */

let array = [1, 2, 3, 4, 5, 6, 7, 8];
let item = 5;

function removeElement(array, item) {
  let index = array.indexOf(item);
  return [...array.slice(0, index), ...array.slice(index + 1)];
}
array = removeElement(array, item);

console.log(array);

/* 3 Реализовать функцию generateKey(length, characters), 
которая возвращает набор случайных символов из 
набора characters длиной length */

function generateKey(length, characters) {
  let key = "";
  for (i = 0; i < length; i++) {
    key += characters[Math.round(Math.random() * length)];
  }
  return key;
}

const characters = "abcdefghklmop12345678";
const key = generateKey(17, characters);

console.log(`Your pass is: ${key}`);
