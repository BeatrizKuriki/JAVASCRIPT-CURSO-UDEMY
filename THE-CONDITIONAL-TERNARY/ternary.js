const age = 25;

//age>= 18? console.log('I like to drink wine ') : console.log('I like to drink water');

//const drink = age>=18? 'wine' : 'water';
//console.log(drink);

console.log(`I like to drink ${ age>=18? 'wine' : 'water'}`);

//Ternary operator não exclui if else que serão necessários quando vc tem um grande bloco de código que precisam ser executados de acordo com certas condições;
//Ternary operator é perfeito quando são necessárias decisões rápidas