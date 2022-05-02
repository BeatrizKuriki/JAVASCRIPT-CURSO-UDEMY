 //Em JavaScript existem 5 valores falsos  que são: 0, '', undefined, null, NaN esses valores se forem convertidos para boolean serão falsos. Inicialmente, eles não são falsos mas se tornam quando são convertidos.

 console.log(Boolean(0));
 console.log(Boolean(undefined));
 console.log(Boolean(NaN));
 console.log(Boolean(null));
 console.log(Boolean(''));
 console.log(Boolean('Beatriz')); // qualquer string que não seja vazia é um valor true
 console.log(Boolean({}));

 // na prática a conversão para boolean é sempre implícita (type coercion), não fazemos na prática. Js realizar essa conversão para boolean em dua situações: 
 //Primeira: quando usamos operadores lógicos;
 //Segunda: em um contexto lógico contexto;

const money = 100;
if(money){
    console.log("Don't spend it alt.");
}else{
    console.log("You should get a job!");
}

let height = 1.68;
if(height){
    console.log("YaY! Height is defined")
}else{
    console.log("Height is UNDEFINED")
}

//Operador de igualdade

//const age = 18;
//if(age === 18) console.log ("You just became an adult");

//=== strict equality operator 
//não trabalha com type coercion e só retorna verdadeiro quando ambos os valores são exatamente iguais;
//== loose equality operator que trabalha com type coercion



const age = '18';
if(age == 18) console.log("You are adult now (loose) ") ; //exemplo de type coercion
 if(age === 18) console.log("You are an adult now (strict)");

 //para um código limpo é melhor evitar usar o operador "loose", haja vista que pode causar muitos erros e bugs, quando vc estiver comparando valores sempre use strict comparator com tres iguais


const favoritoNum = Number(prompt("Qual seu número favorito?"));
console.log(favoritoNum);
console.log(typeof favoritoNum);

if(favoritoNum === 20){//"23 "==23
    console.log("Legal!! 20 é um número ótimo")
}else if(favoritoNum===7){
    console.log("Sete é um número da hora também")
}else{
    console.log("O número não é 7 nem 20");
}
if(favoritoNum !== 23) console.log('Porque não 23?');





