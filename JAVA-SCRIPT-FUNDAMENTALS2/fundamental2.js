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
