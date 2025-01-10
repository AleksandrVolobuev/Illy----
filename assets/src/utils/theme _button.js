"use strict";

const themeButton = document.querySelector(".btn-tem");

themeButton.addEventListener("click", () => {
  // Получаем все элементы с атрибутом data-theme
  const themeElements = document.querySelectorAll("[data-theme]");

  // Перебираем все элементы и меняем их классы в зависимости от их data-theme
  themeElements.forEach((element) => {
    const currentTheme = element.dataset.theme; // Получаем текущее значение data-theme


    // Переключаем классы в зависимости от текущего значения data-theme
    if (currentTheme === "biruza") {
      element.classList.remove("biruza");
      element.classList.add("black");
      element.dataset.theme = "black"; // Обновляем data-theme на "black"
    } else if (currentTheme === "black") {
      element.classList.remove("black");
      element.classList.add("biruza");
      element.dataset.theme = "biruza"; // Обновляем data-theme на "biruza"
    } else if (currentTheme === "black-grey") {
      element.classList.remove("black-grey");
      element.classList.add("white");
      element.dataset.theme = "white"; // Обновляем data-theme на "white"
    } else if (currentTheme === "white") {
      element.classList.remove("white");
      element.classList.add("black-grey");
      element.dataset.theme = "black-grey"; // Обновляем data-theme на "black-grey"
    }else if (currentTheme === "violent") {
      element.classList.remove("violent");
      element.classList.add("no-violent");
      element.dataset.theme = "no-violent";     }else if (currentTheme === "no-violent") {
      element.classList.remove("no-violent");
      element.classList.add("violent");
      element.dataset.theme = "violent"; 
    }
  });
});
