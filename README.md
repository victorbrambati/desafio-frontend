<h1 align="center">
    Pokedex
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/victorbrambati/desafio-frontend.svg">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/victorbrambati/desafio-frontend.svg">
  <a href="https://github.com/victorbrambati/desafio-frontend/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/victorbrambati/desafio-frontend.svg">
  </a>

  <a href="https://github.com/victorbrambati/desafio-frontend/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/victorbrambati/desafio-frontend.svg">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/victorbrambati/desafio-frontend.svg">
</p>

<h4 align="center">
Desafio front-end @redevistorias

</h4>

![App Screenshot](https://res.cloudinary.com/victorbrambati/image/upload/v1605018532/pokedexDesktop_i6ekfc.png)

  </a>
</p>

## 🎉 Como iniciar

### `yarn start`

Irá abrir em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

## 📂 Organização

- Todos os components tem seu próprio arquivo de estilo
- Pasta separada para estilo global e icons
- Base url para consumo de api
- Usando type ao invés de interface para tipar a props e não a função
- Uma unica página foi usada

## ⛔ Dificuldades

O que mais achei complexo foi achar se o pokemon evolui ou não. pois na api onde fica o [pokemon](https://pokeapi.co/api/v2/pokemon/13) não tem essa parte de evolução, então tenho que pegar o id e ir para outra página chamada [pokemon-species](https://pokeapi.co/api/v2/pokemon-species/13) e depois pegar o id do [evolution-chain](https://pokeapi.co/api/v2/evolution-chain/5) pois esse id é diferente do Pokemon e no final consumir a api.

## 🚀 Tecnologias

Esse projeto está sendo feito com as seguintes tecnologias:

- [ReactJS](https://reactjs.org/)
- [Typescript][ts]
- [styled-components](https://www.styled-components.com/)
- [VS Code][vscode] com [ESLint][vceslint]

---

Made with ♥ by Victor Brambati 🌊 [Get in touch!](https://www.linkedin.com/in/victor-brambati-44b054172/)

[ts]: https://www.typescriptlang.org
[vscode]: https://code.visualstudio.com/
[yarn]: https://yarnpkg.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
