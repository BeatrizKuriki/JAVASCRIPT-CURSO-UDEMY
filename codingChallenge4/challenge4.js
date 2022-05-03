//const bill =275 ;
//const tip = bill * 0.15;
//let finalValue = bill + tip;
//const tip2 = bill * 0.20;
//let finalValue2 = bill + tip2;

//bill >= 50 && bill< 300? console.log(' The bill was ' + bill + ' and the tips was ' + tip + 'and the total value ' + finalValue) : console.log ('The bill was' + bill+  'and the total value ' + bill) 

//bill > 300? console.log('The bill was' + bill+ 'and the tips was ' + tip2 + 'and the total value ' + finalValue2): console.log("")

const bill = 430;
const tip = bill <= 300 && bill>=50? bill *0.15 : bill*0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);