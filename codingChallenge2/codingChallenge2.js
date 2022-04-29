let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / heightJohn ** 2;
console.log(BMIJohn, BMIMark)

if(BMIJohn > BMIMark) {
    console.log(`John's BMI ${BMIJohn} is heigher than Mark `)
} else{
    console.log(`Mark's BMI ${BMIMark} is heigher than Jonh`)

}


