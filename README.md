# NEXT.JS v10 - BLOG DO ZERO - PRISMA - FIGMA

Este projeto é um blog desenvolvido do zero, consumindo dados do Prismic e implementando uma interface conforme o layout do Figma. Utiliza tecnologias modernas como NEXT.JS, TypeScript, React, entre outras, para oferecer uma experiência robusta e flexível aos usuários.

[Capa do projeto](https://github.com/iamfelipy/rockseat-reactjs-chapter-iii-desafio1/blob/main/readme-capa.png?raw=true)

#### Algumas das implementações

- Estilizações global, comun e individuais;
- Importação de fontes Google;
- Paginação de posts;
- Cálculo de tempo estimado de leitura do post;
- Geração de páginas estáticas com os métodos `getStaticProps` e `getStaticPaths`;
- Formatação de datas com `date-fns`;
- Uso de ícones com `react-icons`;
- Requisições HTTP com `fetch`;
- Entre outros.

# Conteúdo

- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Testes](#testes)
- [Instalação e execução do projeto](#instalacao-e-execução-do-projeto)
- [Links](#links)

## Tecnologias

- NODE v14.21.3
- NEXT v10
- TYPESCRIPT
- REACT v17
- DATE-FNS
- REACT-ICONS
- @PRISMICIO/CLIENT
- ESLINT
- JEST
- PRETTIER
- SASS

## Funcionalidades

- Renderizar Informações dos Documentos de Posts: Permite a renderização das informações dos documentos de posts na página inicial utilizando o CMS PRISMA.
- Navegar para a Página do Post: Permite a navegação para a página de um post específico ao clicar.
- Carregar Mais Posts: Permite carregar mais posts na página inicial se estiverem disponíveis.

## Testes

##### Header

- Deve ser capaz de renderizar o logo
- Deve ser capaz de navegar para a página inicial após um clique

##### Home
- Deve ser capaz de retornar documentos de posts do Prismic usando getStaticProps
- Deve ser capaz de renderizar informações dos documentos de posts
- Deve ser capaz de navegar para a página do post após um clique
- Deve ser capaz de carregar mais posts se estiverem disponíveis
- Não deve ser capaz de carregar mais posts se não estiverem disponíveis

## Instalação e execução do projeto

Clone o projeto

```bash
  git clone https://github.com/iamfelipy/rockseat-reactjs-chapter-iii-desafio1
```

Entre no diretório do projeto

```bash
  cd  https://github.com/iamfelipy/rockseat-reactjs-chapter-iii-desafio1
```

Instale as dependências

```bash
  npm install
```

Execute o projeto

```bash
  npm run dev
```

## Links

[Notion rocketseat descrição do desafio](https://efficient-sloth-d85.notion.site/Desafio-01-Criando-um-projeto-do-zero-b1a3645d286b4eec93f5f1f5476d0ff7#7b3d1b08107d4b6faa40037715db1b15)
