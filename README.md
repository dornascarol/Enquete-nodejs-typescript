<h1> Sistema de enquetes em real time :bar_chart: </h1>
<br>

<h2> Este foi o projeto que aprendi no curso da Rocketseat </h2>
<p> Um sistema de votação onde os usuários podem criar uma enquete e outros usuários podem votar. O sistema gera um ranking entre as opções e atualiza os votos em tempo real. </p>

<h2> Introdução </h2>
A API vai observar toda vez que houver um novo voto na enquete. Ela vai avisar a minha requisição websocket que houve um novo voto. E esse novo voto vai ser enviado em tempo real para o usuário saber.

Adicionada as opções da votação, em seguida, implementa as rotas de busca pelo ID e a rota do voto na opção selecionada, validando as lógicas de ação do usuário.

## Tecnologias utilizadas
* VS Code
* Node.JS
* NPM
* TypeScript
* Fastify
* Websocket
* Prisma (ORM)
* PostgreSQL
* Redis
* Docker
* Hoppscotch
* UUID
* Fastify/cookie
* Zod


## Ferramentas
Na aplicação foi utilizado o <a href="https://nodejs.org/en/download" target="_blank" > Node.JS </a>  na versão 18.14.0 em LTS.

Na aplicação foi utilizado o <a href="https://docs.docker.com/get-docker/" target="_blank" > Docker </a> na configuração para computador 4.21.1 e versão 24.0.2

Na aplicação foi utilizado o <a href="https://hoppscotch.io/" target="_blank" > Hoppscotch </a> na versão web. 



## Dependências
Framework <a href="https://www.npmjs.com/package/fastify" target="_blank" > Fastify </a> na versão 4.26.1 → `npm i fastify`

ORM <a href="https://www.npmjs.com/package/@prisma/client" target="_blank" > Prisma/client </a> na versão 5.9.1 → `npm install -D prisma`

Biblioteca <a href="https://www.npmjs.com/package/zod" target="_blank" > Zod </a> na versão 3.22.4 → `npm install zod`

Plugin <a href="https://www.npmjs.com/package/@fastify/cookie" target="_blank"> Fastify/cookie </a> na versão 9.3.1 → `npm i @fastify/cookie`

Biblioteca <a href="https://www.npmjs.com/package/ioredis" target="_bank"> Redis </a> na versão 5.3.2 → `npm i ioredis`

Plugin <a href="https://www.npmjs.com/package/@fastify/websocket" target="_blank" > Fastify/websocket </a> na versão 10.0.1 → `npm i @fastify/websocket`


## Dependências de desenvolvimento
Linguagem <a href="https://www.npmjs.com/package/typescript" target="_blank" > TypeScript </a> na versão 5.3.3 → `npm install typescript -D`

Biblioteca <a href="https://www.npmjs.com/package/@types/node" target="_blank" > Types </a> na versão 20.11.19 → `npm install typescript @types/node -D`

Biblioteca <a href="https://www.npmjs.com/package/tsx" target="_blank" > TSX </a> na versão 4.7.1 → `npm install tsx - D`

ORM <a href="https://www.npmjs.com/package/prisma" target="_blank" > Prisma </a> na versão 5.9.1 → `npm install -D prisma`


## Rodando o projeto
- Clone o repositório
- Instalar dependências:
```
npm install
```
- Pra inicar escreva no terminal:
```
npm init -y
```
- Para rodar o TypeScript escreva no terminal:
```
npx tsc --init
```
- Para executar o servidor escreva no terminal:
```
npm run dev
```
- Parar de rodar o servidor: no terminal clicar nas teclas de "Ctrl" e "C".
- Para mostrar quantos contêineres estão rodando escreve no terminal:
```
docker ps
```
- Para rodar o Docker escreva no terminal:
```
docker compose up -d
```
- Para executar o Prisma escreva no terminal:
```
npx prisma init
```
- Para executar a migration escreva no terminal:
```
npx prisma migrate dev
```
- Caminho da URL para o Hoppscotch:
```
http://localhost:3333/polls
```

## Endpoints

| Método | URL             | Descrição                                                                                                                                                                                         |
| ------ | --------------  | ------------------------------------------------------------------------------------------------------                                                                                            |
| POST   | /polls               | Cria uma enquete usando os parâmetros de título e opções enviadas dentro do arquivo `request.body`.  |
| GET    | /polls:pollId        | Busca uma enquete pelo `id` que está dentro de `request.params`.  |
| POST   | /polls/:pollId/votes | Cria o voto de uma opção em alguma enquete específica. O `id` da enquete específica está dentro de `request.params`. E a opção do voto está dentro de `request.body`.  |


## Status do projeto
:heavy_check_mark: Aplicação finalizada.
