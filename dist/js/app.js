"use strict";
const form = document.querySelector(".decoder-text__form");
const btnEncrypt = document.querySelector(".encrypt");
const btnDecrypt = document.querySelector(".decrypt");
const decoderContent = document.querySelector(".decoder-content");
const decoderEncrypt = new Map([
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]);
const decoderDecrypt = new Map([
    ["enter", "e"],
    ["imes", "i"],
    ["ai", "a"],
    ["ober", "o"],
    ["ufat", "u"],
]);
const updateContent = (text) => {
    const p = document.createElement("p");
    const button = document.createElement("button");
    p.classList.add("decoder-content__text");
    button.classList.add("decoder-content__copy");
    p.innerText = text;
    button.innerText = "Copiar";
    button.addEventListener("click", () => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
            alert("Texto copiado");
        })
            .catch((err) => alert(`Erro ao copiar o texto: ${err.message}`));
    });
    decoderContent.innerHTML = "";
    decoderContent.style.justifyContent = "space-between";
    decoderContent.append(p, button);
};
const decoder = (text, decoderType) => {
    const decoderMap = decoderType === "encrypt" ? decoderEncrypt : decoderDecrypt;
    const createdText = text
        .split("")
        .map((letter) => decoderMap.get(letter) || letter)
        .join("");
    updateContent(createdText);
};
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const { text } = Object.fromEntries(data);
    if (e.submitter === btnDecrypt) {
        decoder(text, "decrypt");
    }
    else if (e.submitter === btnEncrypt) {
        decoder(text, "encrypt");
    }
});
