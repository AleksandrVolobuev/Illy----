"use strict";

const form = document.querySelector(".form");
const commentList = document.querySelector(".comment-list"); // Список для комментариев
const numberDiv = document.querySelector(".namber"); // Элемент с номером
let commentCount = 0; // Счётчик комментариев

// Обработчик события при отправке формы
function submitHandler(e) {
  e.preventDefault(); // Предотвращаем перезагрузку страницы

  // Получаем значение комментария и обрезаем лишние пробелы
  const inputValue = e.currentTarget.querySelector("input").value.trim();
 
  // Проверяем, не пустое ли поле
  if (inputValue) {
    // Увеличиваем счётчик комментариев
    commentCount++;

    // Обновляем значение в <div class="namber">
    numberDiv.textContent = `#${commentCount}`;

    // Создаём новый элемент комментария
    const commentItem = document.createElement("li");
    commentItem.classList.add("comment-item"); // Добавляем класс для стилизации

    // Вставляем номер комментария и текст в новый элемент
    commentItem.innerHTML = `
      <span class="comment-number">#${commentCount}:</span>
      <span class="comment-text">${inputValue}</span>
    `;

    // Добавляем новый комментарий в список
    commentList.append(commentItem);

    // Очищаем поле ввода
    e.currentTarget.querySelector("input").value = "";
  } else {
    alert("Будь ласка, введіть текст коментаря!"); // Если поле пустое
  }
}

// Добавляем обработчик события на форму
form.addEventListener("submit", submitHandler);
