document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const newsId = urlParams.get("id");

  if (newsId) {
    const news = newsData.find((item) => item.id === newsId);
    if (news) {
      renderNews(news);
    } else {
      document.getElementById("news-container").innerHTML =
        "<p>Новину не знайдено</p>";
    }
  }
});

function renderNews(news) {
  const container = document.getElementById("news-container");
  container.innerHTML = `
  
      <section class="shock">
        <h2 class="h2">${news.shock}</h2>
      </section>
      <section class="content" data-theme="white">
        <img
          class="div-imgRobot"
          src="${news.image}" alt="${news.title}"
        />
        <p class="par">${news.description} </p>
      </section>
  `;
}

