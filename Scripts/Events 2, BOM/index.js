/* Создать слайдер
Он может показывать минимум 10 картинок.
Слайдер имеет две кнопки: Previous / Next.
При нажатии на которые он показывает предыдущую / следующую картинку.
Слайдер имеет нормальный вид и не меняет размер в зависимости от картинки (если только это не анимировано красиво).
НА крайних позициях своей навигации (первая/последняя картинка) слайдер может дизеблить кнопки соответственно (Previous/Next) ИЛИ может переходить на другой конец ряда картинок (с первой на последнюю и наоборот) (типа слайдер бесконечный).
Для работы с картинками в слайдере использовать */

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
  showSlides((slideIndex += 1));
}

function minusSlide() {
  showSlides((slideIndex -= 1));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("item");
  let dots = document.getElementsByClassName("slider-dots_item");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
