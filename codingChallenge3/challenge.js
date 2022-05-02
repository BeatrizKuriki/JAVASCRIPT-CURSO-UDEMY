//Average score 

const scoreDolphins1 = 97;
const scoreDolphins2 = 112;
const scoreDolphins3 = 81;
const scoreKoalas1 = 109;
const scoreKoalas2 = 95;
const scoreKoalas3 = 86;

let averageScoreDolphins = (scoreDolphins1 + scoreDolphins2 + scoreDolphins3) / 3;

let averageScoreKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;
console.log(averageScoreDolphins, averageScoreKoalas);

if(averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
    console.log ("The winner of competition is Dolphins");
} else if (averageScoreDolphins === averageScoreKoalas && averageScoreDolphins >= 100 && averageScoreKoalas >= 100){
    console.log("There is a draw,a mean the average is equal for both Dolphis and Koalas");
} else if (averageScoreKoalas > averageScoreDolphins && averageScoreKoalas >= 100) { 
    console.log("The winner of competition is Koalas");
}else{
    console.log ("No one win the competition")
}


//if (averageScoreDolphins > averageScoreKoalas) {
    //console.log ("The winner of competition is Dolphins");
//} else if (averageScoreDolphins === averageScoreKoalas){
    //console.log("There is a draw,a mean the average is equal for both Dolphis and Koalas");
//} else { 
    //console.log("The winner of competition is Koalas");

//}

