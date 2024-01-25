const form = document.querySelector(".decoder-text__form") as HTMLFormElement;
const btnEncrypt = document.querySelector(".encrypt") as HTMLButtonElement;
const btnDecrypt = document.querySelector(".decrypt") as HTMLButtonElement;
const decoderContent = document.querySelector(".decoder-content") as HTMLDivElement;

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

const updateContent = (text: string) => {
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
      .catch((err) =>
        alert(`Erro ao copiar o texto: ${(err as Error).message}`)
      );
  });

  decoderContent.innerHTML = "";
  decoderContent.style.justifyContent = "space-between";

  decoderContent.append(p, button);
};

const decoder = (text: string, decoderType: string) => {
  const decoderMap =
    decoderType === "encrypt" ? decoderEncrypt : decoderDecrypt;
  const createdText = text
    .split("")
    .map((letter) => decoderMap.get(letter) || letter)
    .join("");

  updateContent(createdText);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget as HTMLFormElement);
  const { text } = Object.fromEntries(data);

  if (e.submitter === btnDecrypt) {
    decoder(text as string, "decrypt");
  } else if (e.submitter === btnEncrypt) {
    decoder(text as string, "encrypt");
  }
}); 
