"use strict";


let tooltipElem;

/**
 * Обработчик события наведения мыши.
 * Создаёт и позиционирует подсказку.~
 */
function showTooltip(event) {
  const target = event.target;

  // Проверяем наличие атрибута `data-tooltip`
  const tooltipHtml = target.dataset.tooltip;
  if (!tooltipHtml) return;

  // Создаём элемент подсказки
  tooltipElem = document.createElement("div");
  tooltipElem.className = "tooltip";
  tooltipElem.innerHTML = tooltipHtml;
  document.body.append(tooltipElem);

  // Вычисляем координаты и позиционируем подсказку
  const coords = target.getBoundingClientRect();

  let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0;

  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) {
    top = coords.top + target.offsetHeight + 5; // если не помещается сверху, отображаем снизу
  }

  tooltipElem.style.left = left + "px";
  tooltipElem.style.top = top + "px";
}

/**
 * Убирает подсказку.
 */
function hideTooltip() {
  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }
}

// Добавляем делегирование событий
document.addEventListener("mouseover", showTooltip);
document.addEventListener("mouseout", hideTooltip);
