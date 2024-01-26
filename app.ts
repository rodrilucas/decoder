interface Element {
  type: string;
  class_: string;
  text: string;
}

class Content {
  private decoderContent = document.querySelector(
    ".decoder-content"
  ) as HTMLDivElement;
  constructor() {}

  isText(text: string): boolean {
    return text !== undefined;
  }

  createElement(elementAttr: Element): HTMLElement {
    const { type, class_, text } = elementAttr;
    const el = document.createElement(type);

    el.classList.add(class_);

    this.isText(text) ? (el.innerText = text) : null;

    return el;
  }

  updateContent(textValue: string): void {
    const button = this.createElement({
      type: "button",
      class_: "decoder-content__copy",
      text: "copiar",
    } as Element);

    const p = this.createElement({
      type: "p",
      class_: "decoder-content__text",
      text: textValue,
    } as Element);

    button.addEventListener("click", () => {
      navigator.clipboard
        .writeText(textValue)
        .then(() => alert("Texto copiado"))
        .catch((err) =>
          alert(`Erro ao copiar o texto: ${(err as Error).message}`)
        );
    });

    this.decoderContent.innerHTML = "";
    this.decoderContent.style.justifyContent = "space-between";

    this.decoderContent.append(p, button);
  }
}

class Decoder extends Content {
  public btnDecrypt = document.querySelector(".ecrypt") as HTMLButtonElement;
  public btnEncrypt = document.querySelector(".decrypt") as HTMLButtonElement;
  public form = document.querySelector(
    ".decoder-text__form"
  ) as HTMLFormElement;
  constructor() {
    super();
  }

  private createMap(reverse: boolean = false): Map<string, string> {
    const pairs: [string, string][] = [
      ["enter", "e"],
      ["imes", "i"],
      ["ai", "a"],
      ["ober", "o"],
      ["ufat", "u"],
    ];

    return new Map(
      pairs.map(([key, value]) => (reverse ? [value, key] : [key, value]))
    );
  }

  private encryptMap(): Map<string, string> {
    return this.createMap();
  }

  private decryptMap(): Map<string, string> {
    return this.createMap(true);
  }

  private decoder(decoderType: Map<string, string>, text: string): void {
    const createText = text
      .split("")
      .map((letter) => decoderType.get(letter) || letter)
      .join("");
    this.updateContent(createText);
  }

  btnFormEncrypt(event: SubmitEvent): boolean {
    return event.submitter === this.btnEncrypt;
  }

  btnFormDecrypt(event: SubmitEvent): boolean {
    return event.submitter === this.btnDecrypt;
  }

  submitText(): void {
    this.form.addEventListener("submit", (e: SubmitEvent) => {
      e.preventDefault();
      const data = new FormData(e.currentTarget as HTMLFormElement);
      const { text } = Object.fromEntries(data);

      this.btnFormEncrypt(e)
        ? this.decoder(this.encryptMap(), text as string)
        : this.decoder(this.decryptMap(), text as string);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new Decoder();
  app.submitText();
});
