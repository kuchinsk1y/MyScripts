/* 1. Создать функцию для расчета произведения двух чисел, 
вызываемого следующим образом: apl(5)(2). 
Функция должна возвращать результат 
(внутри функции не должно быть консоль лога!) */

function curry(curryApl) {
  return function (a) {
    return function (b) {
      return curryApl(a, b);
    };
  };
}

function apl(x, y) {
  return x * y;
}

let result = curry(apl);
console.log(result(5)(2));

/* 2. Создать функцию, вычисляющую среднее арифметическое 
числовых элементов массива любой длины. */

function arithmeticalMean(array = [1, 2, 3, 66, 787, -6, 20]) {
  let result = null;
  for (let i = 0; i < array.length; i++) {
    result += array[i] / array.length;
  }
  return result;
}
console.log(arithmeticalMean());

/* 3. Создать функцию, которая удаляет из строки все символы, 
переданные вторым аргументом. 'func("hello world", ['l', 'd'])' 
вернет нам "heo wor" */

function strRepl(str = "hello world", delEl = ["l", "d"]) {
  let newStr = str.split("");
  let result = newStr.reduce((acc, item) => {
    if (!delEl.includes(item)) acc.push(item);
    return acc;
  }, []);
  return result.join("");
}

answer = strRepl();
console.log(answer);

/* 4. Написать функцию, принимающую один параметр. При первом вызове
она его запоминает, при втором - суммирует переданный параметр с 
тем, что передали впервые и т.д. Все это с замыканиями, 
например: sum(3) = 3 sum(5) = 8 sum(20) = 28
На каждом вызове возвращает текущую сумму */

function takOpAr() {
  let count = 0;
  return function (userVar) {
    return (count += userVar);
  };
}
let bill = takOpAr();
console.log("sum: " + bill(3));
console.log("sum: " + bill(5));
console.log("sum: " + bill(20));
