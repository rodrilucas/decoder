# Challenges

Este repositório contém um projeto configurado para compilar arquivos **SASS** e **TypeScript**.

## 📌 Requisitos
Antes de iniciar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão recomendada: LTS)
- [npm](https://www.npmjs.com/) (vem junto com o Node.js)

## 📥 Instalação

Clone o repositório e instale as dependências com:

```sh
# Clone o repositório
git clone https://github.com/seu-usuario/decoder.git

# Acesse a pasta do projeto
cd decoder

# Instale as dependências
npm decoder
```

## 🎨 Compilando SASS
Para compilar automaticamente os arquivos SASS, execute:

```sh
npm run sass:watch
```
Isso monitorará os arquivos dentro da pasta `styles/` e gerará os CSS compilados na pasta `dist/css/`.

## 🛠️ Compilando TypeScript
Para compilar os arquivos TypeScript continuamente, utilize:

```sh
npm run tsc:watch
```
Isso observará as alterações nos arquivos TypeScript e recompilará automaticamente.

## 🚀 Desenvolvimento
Durante o desenvolvimento, é recomendado rodar ambos os comandos simultaneamente em terminais separados ou utilizar um gerenciador como `concurrently`.

Caso tenha alguma dúvida ou sugestão, fique à vontade para contribuir! 😊
