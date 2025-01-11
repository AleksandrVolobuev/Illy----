const themeButton = document.querySelector(".btn-tem");
const imgLogo = document.querySelector(".img-logo"); // Находим элемент изображения

themeButton.addEventListener("click", () => {
  // Получаем все элементы с атрибутом data-theme
  const themeElements = document.querySelectorAll("[data-theme]");

  themeElements.forEach((element) => {
    const currentTheme = element.dataset.theme; // Получаем текущее значение data-theme

    // Переключаем классы и меняем картинки в зависимости от текущего значения data-theme
    if (currentTheme === "biruza") {
      element.classList.remove("biruza");
      element.classList.add("black");
      element.dataset.theme = "black"; // Обновляем data-theme на "black"
      
      // Меняем картинку
      imgLogo.src = "./assets/img/svg/main-logo.svg"; // Пример нового пути к картинке
    } else if (currentTheme === "black") {
      element.classList.remove("black");
      element.classList.add("biruza");
      element.dataset.theme = "biruza"; // Обновляем data-theme на "biruza"
      
      // Меняем картинку
      imgLogo.src = "./assets/img/svg/main-logo.svg"; // Возвращаем исходную картинку
    } else if (currentTheme === "black-grey") {
      element.classList.remove("black-grey");
      element.classList.add("white");
      element.dataset.theme = "white"; // Обновляем data-theme на "white"
      
      // Меняем картинку
      imgLogo.src = "./assets/img/svg/logo-dark.svg"; // Пример для другой темы
    } else if (currentTheme === "white") {
      element.classList.remove("white");
      element.classList.add("black-grey");
      element.dataset.theme = "black-grey"; // Обновляем data-theme на "black-grey"
      
      // Меняем картинку
      imgLogo.src = "./assets/img/svg/logo-dark.svg"; // Пример для другой темы
    } else if (currentTheme === "violent") {
      element.classList.remove("violent");
      element.classList.add("no-violent");
      element.dataset.theme = "no-violent";     
      
      // Меняем картинку
      imgLogo.src = "./assets/img/svg/logo-dark.svg"; // Пример для другой темы
    } else if (currentTheme === "no-violent") {
      element.classList.remove("no-violent");
      element.classList.add("violent");
      element.dataset.theme = "violent";     

      // Меняем картинку
      imgLogo.src = "./assets/img/svg/main-logo.svg"; // Пример для другой темы
    }
  });
});
