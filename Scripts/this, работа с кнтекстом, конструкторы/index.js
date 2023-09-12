/* 1. Создать сущность человека (данные вводит пользователь)
имя
возраст
Метод вывода данных об объекте */

function usersInfo() {
  this.name = prompt("Enter your name");
  alert(`Hello ${this.name}!`);
  this.age = prompt("Enter age");
  this.gender = prompt("Enter gender");
}

let user = new usersInfo();
console.log(user);

function showData(usersName) {
  for (item in usersName) {
    console.log(item, ":", usersName[item]);
  }
}

showData(user);

/* 2. Создать сущность автомобиля:
Характеристики автомобиля отдельными свойствами, 3 свойства */

function usersInfo() {
  this.name = prompt("Enter your name");
  this.age = prompt("Enter your age?");
}
function Car(user) {
  if (user.age >= 18) {
    this.owner = user.name;
    this.brand = advancedSearch("Car name:");
    this.year = advancedSearch("Year:");
    this.power = advancedSearch("Engine power");
  } else alert("You are not yet 18");
}

let newUsersInfo = new usersInfo();
let car = new Car(newUsersInfo);

function answer(userName) {
  for (item in userName) {
    if (userName[item] !== null && userName[item] !== false) {
      console.log(item, ":", userName[item]);
    }
  }
}
function advancedSearch(optionsCar) {
  let text;
  do {
    text = prompt(optionsCar);
    if (text === null) {
      text = false;
    }
  } while (text.length === 0);
  return text;
}

answer(newUsersInfo);
answer(car);
console.log(car);
