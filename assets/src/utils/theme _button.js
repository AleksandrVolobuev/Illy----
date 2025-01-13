"use strict";

const themeButton = document.querySelector(".btn-tem");

themeButton.addEventListener("click", () => {
  if (themeButton) {
    const currentTheme = themeButton.dataset.theme;
    themeButton.className = `btn-tem ${currentTheme}`;
  }

  // Получаем все элементы с атрибутом data-theme
  const themeElements = document.querySelectorAll("[data-theme]");

  // Определяем логику смены тем через объект
  const themeMap = {
    biruza: "black",
    black: "biruza",
    grey: "white",
    white: "grey",
    violent: "violentWhite",
    violentWhite: "violent",
    violB: "darkB",
    darkB : "violB",
  };

  // Перебираем все элементы и меняем их классы
  themeElements.forEach((element) => {
    const currentTheme = element.dataset.theme; // Получаем текущее значение data-theme
    const newTheme = themeMap[currentTheme]; // Находим новую тему

    if (newTheme) {
      element.classList.remove(currentTheme); // Удаляем текущий класс
      element.classList.add(newTheme); // Добавляем новый класс
      element.dataset.theme = newTheme; // Обновляем значение data-theme
    }
  });
});
