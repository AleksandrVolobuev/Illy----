'use strict'


document.addEventListener('click', function(event) {
  // Ищем ближайший родительский элемент с классом 'clickable'
  const clickableElement = event.target.closest('.clickable');
  if (clickableElement) {
    const url = clickableElement.getAttribute('data-url'); // Получаем URL из data-url
    if (url) {
      window.location.href = url; // Переход на страницу
    } else {
      console.error('URL не указан!');
    }
  }
});


