# M3 academy - desafios algoritmos 

## Introdução

Este repositório contém os desafios de algoritmos da M3 academy.
Dentro de cada pasta, você encontrará um arquivo README.md com as instruções do desafio.

## Antes de começar

Para executar os desafios, você precisará ter instalado em sua máquina o [Node.js](https://nodejs.org/en/).

1. Depois de clonar o repositório, acesse o seu terminal e digite o comando `npm install` para instalar as dependências do projeto.

## Instruções

- Acesse a pasta do desafio que deseja fazer.
- Leia o arquivo README.md dentro da pasta.
- Abra o arquivo `index.js` e implemente a sua solução dentro da função que está sendo exportada.
- Para testar a sua solução, execute o comando `npm test` no terminal. Seu código deve passar em todos os testes para ser considerado uma solução válida.

## Observações

- Não modifique o nome dos arquivos e nem o nome da função .
- Não modifique os arquivos de teste (arquivos que terminam com `.test.js`).

## Como executar os desafios

Você pode executar os desafios de duas formas:
  - Executar o teste de todos os desafios com o comando `npm test`.
  - Executar o teste de um desafio específico com o comando `npm test -t .<nome-da-função-do-desafio>`
  ```shell
  npm test -t greet
  npm test -t isPrime
  ```
  
  - Ou acessar a pasta do desafio e executar o comando `node index` para executar um código de um desafio especifico ex: 
  ```js
  cd 01-greeting
  node index
  ```
-

## Desafios

- [01-greeting](./01-greeting/readme.md)
- [02-area-do-triangulo](./02-triangleArea/readme.md)
- [03-max-value](./03-maxValue/readme.md)
- [04-fibonnaci](./04-fibonnaci/readme.md)
- [05-isPrime](./05-isPrime/readme.md)
- [06-soma-dos-elementos](./06-sum/readme.md)
- [07-soma-dos-pares](./07-sumEven/readme.md)
- [08-anagrama](./08-isAnagram/readme.md)
- [09-caractere-mais-repetido](./09-mostUsedChar/readme.md)
- [10-lista-palavras-mais-longas](./10-longestWords/readme.md)
