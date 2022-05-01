//Exercicio 1
// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
fatorialDeDez = 1
for (index = 10; index >= 1; index -= 1){
   fatorialDeDez *= index;
} 
console.log(fatorialDeDez);

//Exercicio 2
// Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let word = 'tryber';

//Exercicio 3
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
// Considere o array de strings abaixo:
let array = ['java', 'javascript', 'python', 'html', 'css'];

//Exercicio 4
// Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

// Bônus
// Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .
// n = 5

// *****
// *****
// *****
// *****
// *****

// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. 
// n = 5

// *
// **
// ***
// ****
// *****

// Agora inverta o lado do triângulo
// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também
// n = 5

//     *
//    **
//   ***
//  ****
// *****

// Depois, faça uma pirâmide com n asteriscos de base:
// n = 5

//   *
//  ***
// *****

// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7

//    *
//   * *
//  *   *
// *******

// aça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.
