// Оголосити змінні для ключових елементів сторінки
const iconMenu = document.querySelector(".btn-navigechen>img"); // Іконка меню
const list = document.querySelector(".list"); // Список меню
const nav = document.querySelector(".header_nav"); // Контейнер nav
const header = document.querySelector(".heder"); // Елемент header
const btn = document.querySelector(".btn-navigechen"); // Кнопка

// Встановити початковий стиль для header
// header.style.display = "flex";
// header.style.alignItems = "center";

// Додати слухача подій до кнопки
btn.addEventListener("click", addMenu);

// Написати функцію addMenu для перемикання меню
function addMenu() {
  if (list.classList.contains("active")) {
    // Якщо меню відкрите

    list.classList.remove("active"); // Видалити клас active

    iconMenu.src = "./assets/img/svg/menu-open-light.svg"; // Змінити іконку на меню

    header.style.alignItems = "center"; // Вирівняти вміст header

    btn.classList.remove("rotate"); // Прибрати обертання кнопки
  } else {
    // Якщо меню закрите

    list.classList.add("active"); // Додати клас active

    iconMenu.src = "./assets/img/jpg/photo_2024-12-07_11-29-00.jpg"; // Змінити іконку на закриття
    header.style.alignItems = "flex-start"; // Вирівняти вміст header зверху

    btn.classList.add("rotate"); // Додати обертання кнопки
  }
}