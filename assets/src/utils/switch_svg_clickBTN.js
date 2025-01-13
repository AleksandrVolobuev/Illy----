
document.addEventListener("DOMContentLoaded", () => {
  // Находим кнопку и элемент с логотипом
  const themeButton = document.querySelector(".btn-tem");
  const logo = document.querySelector(".img-logo");

  // Навешиваем обработчик клика на кнопку
  themeButton.addEventListener("click", () => {
    // Проверяем текущий логотип и переключаем его
    const currentSrc = logo.getAttribute("src");
    if (currentSrc.includes("logo.svg")) {
      logo.setAttribute("src", "./assets/img/svg/logo-dark.svg");
    } else {
      logo.setAttribute("src", "./assets/img/svg/logo.svg");
    }
  });
});
