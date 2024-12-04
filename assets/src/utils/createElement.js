/**
 * Функция для создания элемента.
 * @param {string} tag Тег элемента.
 * @param {Array<string>} classList Список классов.
 * @param {Array<Node|string>} children Дочерние элементы или текст.
 * @returns {HTMLElement} Созданный элемент.
 */
function createElement(tag, classList = [], children = []) {
  const elem = document.createElement(tag);
  elem.classList.add(...classList);
  children.forEach((child) => {
    if (typeof child === "string") {
      elem.append(document.createTextNode(child));
    } else {
      elem.append(child);
    }
  });
  return elem;
}