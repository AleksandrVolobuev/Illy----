"use strict";

let counter; // Объявление переменной (можно удалить, если она не используется)
const likesP = document.querySelector("div.text-p");
const likesImg = document.querySelector("img.text-p");

function likeHandler(e) {
    // Проверяем, есть ли "9" в тексте и заменяем ее на "10"
    if (likesP.textContent.includes("9")) {
        likesP.textContent = likesP.textContent.replace("9", "10");
    } else if(likesP.textContent.includes("10")){
        likesP.textContent = likesP.textContent.replace("10", "9");
    } else {
        console.warn("Число 9 не найдено в тексте.");
    }
}

// Добавляем EventListener корректно
likesImg.addEventListener("click", likeHandler);