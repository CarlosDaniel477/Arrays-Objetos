//1. Criar um array chamado "biblioteca".
const biblioteca = [
    // 2. Adicione vários objetos, cada um representando um livro.
  {
    titulo: "O Guia do Mochileiro das Galáxias",
    autor: "Douglas Adams",
    anoPublicacao: 1979
  },
  {
    titulo: "“Ter ou Ser?",
    autor: "Erich Fromm",
    anoPublicacao: 1976
  },
  {
    titulo: "Duna",
    autor: "Frank Herbert",
    anoPublicacao: 1965
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    anoPublicacao: 1949
  }
];
// 3. Imprima no console o título do segundo livro da biblioteca.
// Em arrays, a contagem começa do zero.
// Portanto, o segundo item está no índice 1.
console.log(biblioteca[1].titulo);

//Outra forma de uso:
//console.log(biblioteca[1].titulo, biblioteca[1].autor, biblioteca[1].anoPublicacao);