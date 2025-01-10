document.addEventListener("DOMContentLoaded", function () {
  const allNews = document.querySelectorAll(".news");
  const dropdownItems = document.querySelectorAll(".dropdown-menu a");
  const gridNews = document.querySelector(".grid-news");
  const btnList = document.querySelector(".btn-list");
  const btnTile = document.querySelector(".btn-title");

  // Переключение между плиткой и списком
  btnTile.addEventListener("click", function () {
    gridNews.classList.remove("list-view");
    gridNews.classList.add("tile-view");
  });

  btnList.addEventListener("click", function () {
    gridNews.classList.remove("tile-view");
    gridNews.classList.add("list-view");
  });

  // Фильтрация новостей по категории
  dropdownItems.forEach(item => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const category = e.target.getAttribute("data-category");

      // Убираем класс 'hidden' с всех новостей
      allNews.forEach(news => {
        news.classList.remove("hidden");
      });

      // Фильтрация новостей
      if (category === "all") {
        return; // Показываем все новости
      }

      allNews.forEach(news => {
        const newsCategory = news.querySelector(".block-link").textContent.toLowerCase();

        // Если категория не совпадает, скрываем новость
        if (!newsCategory.includes(category)) {
          news.classList.add("hidden");
        }
      });
    });
  });
});