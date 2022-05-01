
// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.table(numbers);

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
for (let index = 0; index < numbers.length; index+=1) {
    let number = numbers[index];
    console.log(number);    
}

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let soma = 0;
for (let index = 0; index < numbers.length; index+=1) {
    soma += numbers[index];
}
console.log('a soma dos números é: ' + soma);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
let valor = 0
for (let number of numbers) {
    valor += number
}
let media = valor / numbers.length
console.log(`a média dos números é ${media}`);


// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (media > 20) {
    console.log(`Valor ${media} maior que 20`);
} else{
    console.log(`Valor ${media} menor ou igual a 20`);    
}


// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maior = numbers[0];
for (let num of numbers) {
    if (num > maior) {
        maior = num
    }
}
console.log(`O maior número é ${maior}`);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let impares = 0
for (let p of numbers) {
    if (p % 2 != 0){
        impares +=1
    }
}    
    if (impares.length > 0) {
        console.log(`Foram encontrados ${impares} números ímpares`);
    } else {
        console.log('nenhum valor ímpar encontrado');
    }


// Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let menor = numbers[0];
for (let num of numbers) {
    if (num < menor) {
        menor = num;
    }
}
console.log(`O menor número é ${menor}`);

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .