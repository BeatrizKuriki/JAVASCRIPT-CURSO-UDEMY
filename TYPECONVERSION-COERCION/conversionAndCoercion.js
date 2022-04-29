//TYPE CONVERSION
const inputYear = '1991';
//no javascript é possível converter strings para números usando a função Number(), no caso essa função não muda a variável que continua sendo uma string.
console.log(Number(inputYear) + inputYear);
console.log(Number(inputYear) + 18);
console.log(Number('Jonas'));
//se a string não contiver um número a função Number() irá retornar NaN = not a number o que significa que é um número inválido;

console.log(String(23), 23);
//js pode converter para numero, string ou a boolean(que se comportam de maneira diferente na hora da converção);

//TYPE COERCION//
//quando um operador esta lidando com dois valores que tem diferente tipos. Neste caso Js vai por baixo dos panos um dos valores para o tipo de valor

console.log('I am ' + 23 + ' years old')
//no caso acima o JS realiza a type coercion
//quando houver uma operação entre string e number, o number será convertido a string

console.log('50' - '20' +2);
//neste caso js converteu as strings para números e fez o calculo lançando o resultado 32, a operação de subtração desencadeou a coerção;

console.log('50 '+'25');
// no acima o JS apenas fez a concatenação das strings e nao a operção de soma

console.log('50' + '25' -2);
//neste caso Js retorna uma string 5023, pq primeiro faz a coerção da string 25 para numeros realiza a subtração e depois retorna 23 a string e concatena com a string 50 resultando em uma string 5023;

console.log('50' +'25' + 3);
// neste caso o numero 3 foi convertido a uma string e o console retornou uma string concatenada 50253

console.log('10' * '2');
console.log ('10' / '2');

let n = '1' +1; // '11'
n= n- 1; // 10
console.log (n);


