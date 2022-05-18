const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
//   🚀 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// Dica: Use a função map

const formatedBookNames = (array) => array.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

// console.log(formatedBookNames(books));

// 🚀 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
// Dica: use as funções map, sort

const nameAndAge = (array) => array.map((people) => {
    const peopleObj = {age: (people.releaseYear - people.author.birthYear),
    author: people.author.name,
    }
    return peopleObj
}).sort((ageA, ageB) => ageA.age -ageB.age);

// console.log(nameAndAge(books));

// 🚀 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
// Dica: use a função filter;

const fantasyOrScienceFiction = (array) => array.filter((id) => id.genre === 'Ficção Científica' || id.genre === 'Fantasia').sort();

//  console.log(fantasyOrScienceFiction(books));

// 🚀 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
// Dica: use as funções filter e sort

const oldBooksOrdered = (array) => array.filter((element) => new Date().getFullYear() - element.releaseYear > 60).sort((a, b) => a.releaseYear - b.releaseYear);

// console.log(oldBooksOrdered(books));

// 🚀 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const fantasyOrScienceFictionAuthors = (array) => array.filter((id) => id.genre === 'Ficção Científica' || id.genre === 'Fantasia');

// console.log(fantasyOrScienceFictionAuthors(books));

// 🚀 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

// const oldBooks = (array) => array.filter((elemento) => {
//     (new Date().getFullYear() - elemento.releaseYear) > 60;
// }).map((book) => book.name);

function oldBooks() {
    const currentYear = new Date().getFullYear();
    return books
      .filter((book) => currentYear - book.releaseYear > 60)
      .map((book) => book.name);
  }
 
// console.log(oldBooks());

//  7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.

const authorWith3DotsOnName = (array) => array.filter((element) =>  e(element.author.name[1] === '.' && element.author.name[4] === '.' && element.author.name[7] === '.'));

// function authorWith3DotsOnName() {
//     return books.filter((book) => (
//       book.author.name[1] === '.'
//       && book.author.name[4] === '.'
//       && book.author.name[7] === '.'
//     ))[0].name;
// }

console.log(authorWith3DotsOnName(books));