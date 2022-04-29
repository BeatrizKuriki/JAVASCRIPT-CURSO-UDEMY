const age = 18;

//const isOldEnough = age>=19;

if(age>=18){
    console.log(`Beatriz can star driving license`)
}else {
    const yearsLeft = 18 - age;
    console.log(`Beatriz is too young. Wait another ${yearsLeft} years.`)
}

const birthYear =2018;

let century;
if(birthYear <= 2000) {
century = 20;
}else{
    century = 21;
    
}
console.log(century);
