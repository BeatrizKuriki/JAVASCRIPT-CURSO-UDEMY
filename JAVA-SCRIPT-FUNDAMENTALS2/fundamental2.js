'use strict';
//let hasDriversLicense = false;
//const passTest = true;

//if(passTest) hasDriversLicense = true;
//if(hasDriversLicense) console.log('I can drive :d');//

//Functions

function logger(){
    console.log('My name is Beatriz')
}
//calling/ running /invoking
//chamando / correndo / invocando a função
logger();
logger();
//parametros são como variáveis que são especificas para esta função quando especificamos parametros em um função, estamos basicamente estabelecendo variaveis para a função que serão definidas uma vez que a função seja chamada. Os parametros são colocados dentro do parenteses da função
//function fruitProcessor(apples, oranges){
   
    //const juice = `Juice with ${apples} apples and ${oranges} oranges`;
   // return juice;
//}

//const appleJuice = fruitProcessor(5, 0);
//console.log(appleJuice);
//console.log(fruitProcessor(5,0))

//const appleOrangeJuice = fruitProcessor(2,4);
//console.log(appleOrangeJuice);//



//Function Declaration 

function calcAge1(birthYear){
    return  2037 -birthYear;
    
}

const age1 = calcAge1(1991);
console.log(age1);

//Function expression
//na função com expression basicamente não há nomeação da função como no caso da fuction declaration em que a função recebe um nome, no caso acima a função foi chamada de calcAge1

const calcAge2 = function (birthYear){
    return 2037 -birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);

//In JavaScript there are two types of function: function declaration and function expression
//functions in js are values so can be storaged in a variable
//So what's the big difference between both? The main difference is that we can actually call function declarations before they are defined in the code
//funções em js são valores, não são tipos como number ou string são basicamente valores


//O tipo de função a ser escolhida vai depender do gosto do desenvolvedor. Ambos os tipos podem ser usados sem problemas. O instrutor do curso aconselha a usar function expression porque assim faz-se a declaração de todas as funções antes no inicio no codigo e dai elas podem ser chamadas.

//ARROW FUNCTION - constitui uma function declaration

//const calcAge3 = birthYear => 2037 - birthYear;
//const age3 = calcAge3(1992)
//console.log(age3);

//const yearsUntilRetirement = (birthYear, fisrtName) => {
  //  const age = 2037 - birthYear;
  //  const retirement = 65 - age;
   // return retirement
 //  return `${fisrtName} retires in ${retirement} years`
///}

//console.log(yearsUntilRetirement (1987, 'Beatriz'));
//console.log(yearsUntilRetirement //(2000, 'Stella'));

//Arrow function não é pra ser usada em tudo só porque é mais curta, no geral deve-se usar as functions tradicionais  e excepcionalmente para muito simples funções de uma linha. Arrow Functions são muito importantes.


//FUNCTIONS CALLING OTHER FUNCTIONS

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces (apples);
    const orangePieces = cutFruitPieces (oranges);
    const juice = `Juice with ${applePieces} pieces of apple adn ${orangePieces} pieces of orange`;
    return juice;
}

//const juice = fruitProcessor(2,3);
console.log(fruitProcessor(2,3));

//Qual a finalidade de chamar uma função dentro da outra? É uma operação muito comum e também serve para ilustrar a máxima: "não se repita"





