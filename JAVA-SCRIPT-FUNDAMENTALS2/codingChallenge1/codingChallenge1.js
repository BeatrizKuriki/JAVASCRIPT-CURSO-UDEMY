//CODING CHALLENGE

//aRROW fUNCTION


const calcAverage = (score1,score2,score3) => (score1 + score2+ score3) / 3;

//test 1
let averageDolphins = calcAverage(44,23,71);


let averageKoalas = calcAverage(65,54,49);

const checkWinner = function(avgDolphins, avgKoalas){
    if (avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins win :)${avgDolphins} points versus ${avgKoalas} points`);
    }else if (avgKoalas>= 2 * averageDolphins){
        console.log(`Koalas win :)${avgKoalas} points versus ${avgDolphins} points`) 

    }else{
        console.log(`There is no winner`)
    }
}
checkWinner (averageDolphins, averageKoalas);

checkWinner(576,111);

//Test 2

averageDolphins = calcAverage(85,54,41);


averageKoalas = calcAverage(23,34,27);
checkWinner(averageDolphins, averageKoalas);

