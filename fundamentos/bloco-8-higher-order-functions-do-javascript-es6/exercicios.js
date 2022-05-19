// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

// const newEmployees = (obj) => {
//     const employees = {
//       id1: generateEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: generateEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: generateEmail('Carla Paiva'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     }
//     return employees;
// };

// const generateEmail = (fullName) => {
//     const id = {nome: fullName,
//     email: `${fullName.replace(/ /g,'_').toLowerCase()}@trybe.com`,
//     };
//     return id
// };

// console.log(newEmployees('generateEmail'));

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const prizeDraw = (numberBet, numberDraw) => {
    const number = numberDraw()
    if (number === numberBet) {
        return `O número sortedo foi ${number}, Parabéns você ganhou`;
    }
    return `O número sortedo foi ${number}, Tente novamente`;
}

const randonNumber = () => Math.floor(Math.random() * 5);


// console.log(prizeDraw(3, randonNumber));

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const right = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const student = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const result = (rightAnswers, studentAswers, callback) =>{
    let resultPoints = 0;
    for (let index = 0; index < rightAnswers.length; index += 1) {
        const count = callback(rightAnswers[index], studentAswers[index]);
        resultPoints += count;
    };
    return resultPoints;
};

const countPoints = (answerFeedback, answerStudent) =>{
    if(answerStudent === 'N.A') {
        return 0;
    } else if (answerFeedback === answerStudent) {
        return 1;
    } else if (answerStudent != 'N.A' && answerStudent != answerFeedback) {
        return -0.5;
    }
};

console.log(result(right, student, countPoints));