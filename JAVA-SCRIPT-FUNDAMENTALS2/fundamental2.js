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
function fruitProcessor(apples, oranges){
   
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5,0))

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);



//Function Declaration 

function calcAge1(birthYear){
    return  2037 -birthYear;
    
}

const age1 = calcAge1(1991);
console.log(age1);

//Function expression

const calcAge2 = function (birthYear){
    return 2037 -birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);

//In JavaScript there are two types of function: function declaration and function expression
//functions in js are values so can be storaged in a variable
//So what's the big difference between both? The main difference is that we can actually call function declarations before they are defined in the code