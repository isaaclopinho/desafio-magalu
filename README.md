# 🔥 Desafio Magalu - Frontend Sr.

[![CI/CD](https://github.com/isaaclopinho/desafio-magalu/actions/workflows/node.js.yml/badge.svg)](https://github.com/isaaclopinho/desafio-magalu/actions/workflows/node.js.yml)
[![codecov](https://codecov.io/gh/isaaclopinho/desafio-magalu/branch/master/graph/badge.svg)](https://codecov.io/gh/isaaclopinho/desafio-magalu)
[![License: CC0-1.0](https://img.shields.io/github/license/isaaclopinho/desafio-magalu?logoColor=cc0)](./license.md)

## 🗺️ Conteúdo
  - [📙Sobre o projeto](#-sobre-o-projeto)
  - [⚙️Pré-instalação](#%EF%B8%8F-pré-instalação)
  - [🔧Instalação](#-instalação)
  - [🚀Inicialização](#-inicialização)
  - [📝Testes unitários](#-testes-unitários)
  - [📌Scripts Auxiliares](#-scripts-auxiliares)
  - [😀Contatos](#-contatos)
  - [🎊Licença](#-licença)

## 📙 Sobre o Projeto

O projeto consiste no desafio de Frontend Sr. da Magazine Luiza e se trata de uma aplicação para listagem e detalhamento de personagens de quadrinhos.

Para visualizar o projeto, acesse o link [Desafio Magalu](https://isaaclopinho.github.io/desafio-magalu/).

O projeto conta com as seguintes implementações:
- SPA, utilizando `Typescript`, `React`, `SASS` e `ES6`;
- Componentes estruturados em `Atomic Design`;
- `ESlint` e `Prettier` para garantir melhor qualidade do código;
- `API da Marvel` para consultas de personagens e quadrinhos;
- Página de listagem de personagens com paginação, filtros de ordenação e favoritos;
- Página de detalhe do personagem para exibir dados de personagem e dos últimos quadrinhos;
- Funções de `favoritar/desfavoritar` personagens com persistência de dados;
- Layout `Responsivo` para celular e desktop;
- Testes unitários com `Testing-Library`;
- Relatório de testes em nuvem através do `Codecov`;
- `Pipeline CI/CD` para checagem de código, deploy da aplicação no `github pages` e geração do relatório de testes.

Observação: O projeto não utilizou bibliotecas de UI, como bootstrap.

## ⚙️ Pré-Instalação

Antes de instalar as dependências e executar o projeto, siga as instruções abaixo para adicionar as variáveis de ambiente:

1. Crie um arquivo `.env` na raiz do projeto;
1. Adicione as variáveis de ambiente `REACT_APP_MARVEL_API`, `REACT_APP_MARVEL_API_PUBLIC_KEY` e `REACT_APP_MARVEL_API_PRIVATE_KEY`.
  - A tabela abaixo mostra o valor das variáveis de ambiente.

  |Variável do ambiente|Valor da variável|
  |-|-|
  |`REACT_APP_MARVEL_API`|url da API de consulta (`https://gateway.marvel.com/`)|
  |`REACT_APP_MARVEL_API_PUBLIC_KEY`|chave pública da API da Marvel|
  |`REACT_APP_MARVEL_API_PRIVATE_KEY`|chave privada da API da Marvel|

  - Abaixo, é ilustrado como o arquivo `.env` deve ficar:

```dosini
REACT_APP_MARVEL_API=https://gateway.marvel.com/
REACT_APP_MARVEL_API_PUBLIC_KEY=
REACT_APP_MARVEL_API_PRIVATE_KEY=
```

Se você não possui as chaves da API, acesse o [site de documentação da Marvel](https://developer.marvel.com/account) para gerar novas chaves.

## 🔧 Instalação

Após adicionar as variáveis do ambiente, siga as instruções abaixo para instalação do projeto:

1. Use o seguinte comando para instalar as dependências do projeto:

  ```sh
  npm install
  ```
  - Caso já tenha o plugin do ESlint instalado na sua IDE, pule para a seção de [Inicialização](#inicialização);

1. No Visual Studio Code, execute o atalho Ctrl+Shift+X para abrir o navegador de extensão;
1. Pesquise pelo plugin ESlint;
1. Instale o plugin ESLint para finalizar as configurações do projeto.

## 🚀 Inicialização

Para começar a utilizar o projeto, siga as instruções abaixo:

1. Para iniciar o aplicativo em modo de desenvolvimento, execute o seguinte comando:

  ```sh
  npm start
  ```

2. Para compilar o aplicativo para produção na pasta `build`, execute o seguinte comando:

  ```sh
  npm run build
  ```

## 📝 Testes unitários

### Executor de testes

1. Para executar os testes no modo de exibição interativa, execute o seguinte comando:

  ```sh
  npm test
  ```

### Codecov

Codecov é uma ferramenta de análise de código para agrupar, mesclar, arquivar e comparar relatórios de cobertura. A cobertura de código aponta as linhas de código executadas e não executadas pelo conjunto de testes.

Em vez de executar os testes via linha de comando, você também pode visualizar o [relatório](https://codecov.io/gh/isaaclopinho/desafio-magalu) de cobertura gerado pelo pipeline CI/CD.

## 📌 Scripts Auxiliares

### Create Component

`Create Component` é um comando que auxilia a criação de componentes e seus arquivos auxiliares. O arquivo de estilo, de testes e TSX da componente é criado seguindo os padrões estabelecidos.

1. Para criar uma componente, execute o seguinte comando:

  ```sh
  npm run cc tipodecomponente nome-da-componente
  ```
- O `tipodecomponente` pode ser `atom`, `molecule`, `organism`, `template` ou `page`.
- O `nome-da-component` é o nome da componente em `snake-case`.

## 😀 Contatos

Se você tem alguma dúvida sobre o projeto, entre em contato comigo pelos seguintes links:

- [Linkedin](https://www.linkedin.com/in/isaaclopinho/)
- [Github](https://github.com/isaaclopinho)

## 🎊 Licença

Distribuído sob a licença CC0 1.0 Universal.
