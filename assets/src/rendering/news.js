document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const newsId = urlParams.get('id');

  if (newsId) {
    const news = newsData.find(item => item.id === newsId);
    if (news) {
      renderNews(news);
    } else {
      document.getElementById('news-container').innerHTML = '<p>Новину не знайдено</p>';
    }
  }
});

function renderNews(news) {
  const container = document.getElementById('news-container');
  container.innerHTML = `
    <div class="news-detail">
      <img src="${news.image}" alt="${news.title}" class="news-detail-image">
      <h1 class="news-detail-title">${news.title}</h1>
      <p class="news-detail-description">${news.description}</p>
      <div class="news-detail-meta">
        <span class="news-detail-category">${news.category}</span>
        <span class="news-detail-date">${news.date}</span>
      </div>
    </div>
  `;
}
