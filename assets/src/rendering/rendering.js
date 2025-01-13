document.addEventListener('DOMContentLoaded', () => {
  // Выбираем все кликабельные блоки новостей
  const newsBlocks = document.querySelectorAll('.news.clickable');

  if (newsBlocks.length === 0) {
    console.error('Блоки новостей не найдены. Проверьте HTML-код.');
    return;
  }

  newsBlocks.forEach(news => {
    news.addEventListener('click', (event) => {
      console.log('Клик по элементу:', event.target);
      const newsId = news.getAttribute('data-id'); // Получаем ID новости
      console.log('Клик по новости! ID:', newsId);

      if (newsId) {
        // Перенаправляем на news.html с добавлением ID в URL
        window.location.href = `./news.html?id=${newsId}`;
      } else {
        console.warn('Атрибут data-id отсутствует у элемента.');
      }
    });
  });
});
