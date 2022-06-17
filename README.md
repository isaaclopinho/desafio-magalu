# Desafio Magalu - Frontend Sr.

[![CI/CD](https://github.com/isaaclopinho/desafio-magalu/actions/workflows/node.js.yml/badge.svg)](https://github.com/isaaclopinho/desafio-magalu/actions/workflows/node.js.yml)
[![codecov](https://codecov.io/gh/isaaclopinho/desafio-magalu/branch/master/graph/badge.svg)](https://codecov.io/gh/isaaclopinho/desafio-magalu)
[![License: CC0-1.0](https://img.shields.io/github/license/isaaclopinho/desafio-magalu?logoColor=cc0)](./license.md)

## Conteúdo
  - [Sobre o projeto](#sobre-o-projeto)
  - [Pré-requisitos](#pré-requisitos)
    - [`Variáveis de ambiente`](#variáveis-de-ambiente)
  - [Instalação](#instalação)
  - [Inicialização](#inicialização)
  - [Testes unitários](#testes-unitários)
    - [`npm test`](#executor-de-testes)
    - [`Codecov`](#codecov)
  - [Scripts Auxiliares](#scripts-auxiliares)
    - [`Create Component`](#create-component)
  - [Contatos](#contatos)
  - [Licença](#licença)

## Sobre o projeto

O projeto consiste no desafio de Frontend Sr. da Magazine Luiza, no qual foi desenvolvido uma aplicação para listagem e detalhamento de personagens de quadrinhos.

É possível visualizar o projeto através deste [link](https://isaaclopinho.github.io/desafio-magalu/).

Os requisitos implementados foram:
- SPA, utilizando Typescript, React, SASS e ES6;
- Componentes com Atomic Design;
- Foi utilizado ESlint e Prettier para garantir a qualidade do código;
- Não foi utilizado bibliotecas de UI, como bootstrap;
- Foi utilizado a API da Marvel para consultas de personagens e quadrinhos;
- Página de listagem de personagens, com paginação, filtros de ordenação e favoritos;
- Página de detalhe do personagem, exibindo dados de personagem e dos últimos quadrinhos;
- Funções de favoritar/desfavoritar com persistência de dados (em ambas as páginas);
- Layout Responsivo (Funcionando em celular e desktop);
- Testes unitários, utilizando testing-library;
- Disponibilizado relatório de testes em nuvem, através do Codecov;
- Pipeline CI/CD, para checagem de código, deploy da aplicação no github pages e geração do relatório de testes;

## Pré-requisitos

Antes de iniciar a instalação do projeto, é essencial que alguns pré-requisitos sejam atendidos, e cada um deles está listado a seguir.

### `Variáveis de ambiente`
Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente `REACT_APP_MARVEL_API`, `REACT_APP_MARVEL_API_PUBLIC_KEY` e `REACT_APP_MARVEL_API_PRIVATE_KEY`. Os valores das chaves são a url da api de consulta (`https://gateway.marvel.com/`), a chave pública e a chave privada da api da Marvel, respectivamente.
  ```
  REACT_APP_MARVEL_API=https://gateway.marvel.com/
REACT_APP_MARVEL_API_PUBLIC_KEY=
REACT_APP_MARVEL_API_PRIVATE_KEY=
  ```

Caso não tenha as chaves da api, é possível gerar, gratuitamente, através do [site de documentação da Marvel](https://developer.marvel.com/account).


## Instalação

Siga os passos listados abaixo para instalar e configurar corretamente o aplicativo de forma simples e prática.

1. Instale as dependências do projeto com o seguinte comando:

  ```sh
  npm install
  ```
2. Caso já tenha o plugin do ESlint instalado na sua IDE, pule para a seção de [Inicialização do projeto](#inicialização);
3. No VSCode, abra o navegador de extensão (Ctrl+Shift+X);
4. Pesquise por ESlint;
5. Instale o plugin chamado “ESLint”, assim o projeto estará configurado e pronto para executar!

## Inicialização

Para começar a utilizar o projeto, basta seguir os passos  listados abaixo.

1. Para executar o aplicativo em modo de desenvolvimento, digite o seguinte comando:

  ```sh
  npm start
  ```

2. Caso queira compilar o aplicativo para produção na pasta `build`, execute o seguinte comando:

  ```sh
  npm run build
  ```

## Testes unitários

### `Executor de testes`

1. Para executar os testes no modo de exibição interativa, digite o seguinte comando:

  ```sh
  npm test
  ```

### `Codecov`

Codecov é uma ferramenta de análise de código com a qual os usuários podem agrupar, mesclar, arquivar e comparar relatórios de cobertura. A cobertura de código descreve quais linhas de código foram executadas pelo conjunto de testes e quais não foram.

Caso não queira executar os testes via linha de comando, é possível visualizar o [relatório](https://codecov.io/gh/isaaclopinho/desafio-magalu) de cobertura gerado pelo pipeline CI/CD.

## Scripts Auxiliares

### `Create Component`

Comando que tem função de auxiliar na criação de componentes e seus arquivos auxiliares. É criado o arquivo de estilo, de testes e TSX da componente, seguindo alguns padrões preestabelicidos.

1. Para criar uma componente, digite o seguinte comando, em que o `tipodecomponente` pode ser `atom`, `molecule`, `organism`, `template` ou `page` e o `nome-da-component` é o nome da componente em `snake-case`.

  ```sh
  npm run cc tipodecomponente nome-da-componente
  ```

## Contatos

Caso tenha alguma dúvida sobre o projeto, contate-me através dos seguintes links:

- [Linkedin](https://www.linkedin.com/in/isaaclopinho/)
- [Github](https://github.com/isaaclopinho)

## Licença

Distribuído sob a licença CC0 1.0 Universal.