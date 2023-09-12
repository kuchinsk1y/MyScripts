/* Есть блок с текстом на странице и кнопку. 
При нажатии на кнопку текст изменяет цвет. 
При повторном нажатии – возвращается предыдущий цвет */

const newColorText = document.querySelector(".header_text");
const headerBtn = document.querySelector(".header_btn");

headerBtn.addEventListener("click", function () {
  newColorText.classList.toggle("newText-color");
});

/* На странице есть две кнопки. При нажатии на первую кнопку пользователь 
должен ввести в prompt ссылку, при нажатии на вторую – 
переадресовывается на другой сайт (по ранее введенной ссылке).

document.location.href = “url_to_go”; */

let link;
const btnOne = document.querySelector(".btn-one");
const btnTwo = document.querySelector(".btn-two");

btnOne.addEventListener("click", function () {
  link = prompt("Enter a Link:");
  if (!isValidUrl(link)) {
    alert("Link is Invalid!");
    link = "";
  }
});

btnTwo.addEventListener("click", function () {
  document.location.href = link;
});

function isValidUrl(url) {
  let objRE = /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
  return objRE.test(url);
}

// Вывести таблицу 10×10, заполненную числами от 1 до 100 (таблица создана динамически)

function createMatrix(rows, cols) {
  const matrix = [];

  for (let i = 0; i < 10; i++) {
    matrix[i] = [];

    for (let j = 0; j < 10; j++) {
      matrix[i][j] = i * 10 + j + 1;
    }
  }

  return matrix;
}

document.querySelector("body").insertAdjacentHTML(
  "beforeend",
  `
    <table>${createMatrix()
      .map(
        (n) => `
        <tr>${n
          .map(
            (m) => `
            <td>${m}</td>`
          )
          .join("")}
            </tr>`
      )
      .join("")}
            </table>
            `
);

/* В папке images есть изображения 
1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. 
Вывести изображение из этой папки полученное 
случайным образом (Math.random) по нажатию на кнопку 
выводить новую случайную картинку */

const buttonOne = document.querySelector(".btn-img");

buttonOne.addEventListener("click", function () {
  const i = Math.floor(Math.random() * 9 + 1);
  document.querySelectorAll("img").forEach((img) => img.remove());
  document
    .querySelector("main")
    .insertAdjacentHTML(
      "beforeend",
      `<img src="./img/${i}.jpg" alt="img ${i}" id=img${i}>`
    );
});
