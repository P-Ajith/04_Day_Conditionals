/*
let age = prompt("Enter you age:");
let wait = 18- age;
if(age >= 18){
    console.log("you are old enough to drive");
} else {
    console.log(`wait for ${wait} of years he need to turn 18`)
}


let myAge = prompt("Enter your age:");
let yourAge = prompt("Enter your age:");
let ageDiff = Math.abs(myAge - yourAge);
if(myAge > yourAge){
    console.log(`i am ${ageDiff} years older than you`)
} else if(myAge == yourAge){
    console.log("we both are same age");
} else {
    console.log(`you are ${ageDiff} years older than me`);
}
*/

let a1 = 1994;
let b1 = 1995;
if (a1 > b1) {
    console.log(`${a1} is greater than ${b1}`);
} else {
    console.log(`${b1} is greater than ${a1}`);
}

(a1 > b1) ? console.log(`${a1} is greater than ${b1}`)
    : console.log(`${b1} is greater than ${a1}`);
/*
let mod = prompt("Enter the number:");
let remi = mod % 2;
if( remi == 0){
    console.log(`${mod} is an even number`);
} else {
    console.log(`${mod} is an odd number`);
}


let grade = prompt("Enter the score:")

if(grade >= 80 && grade <=100){
    console.log("The grade is A");
} else if(grade >=70 && grade <=79){
    console.log("The grade is B");
} else if(grade >=60 && grade <=69){
    console.log("The grade is C");
} else if(grade >= 50 && grade <=59){
    console.log("The grade is D");
} else {
    console.log("The grade is F");
}


let season = prompt("Enter the month:");

switch (season) {
    case "September":
    case "October":
    case "November":
        console.log("The season is Autumn");
        break
    case "December":
    case "January":
    case "February":
        console.log("The season is Winter");
        break
    case "March":
    case "April":
    case "May":
        console.log("The season is Spring");
        break
    case "June":
    case "August":
        console.log("The season is Summer");
        break
}
*/

let whatDay = prompt("What day is today?");

switch (whatDay) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        console.log(`${whatDay} is a working day`);
        break
    case "saturday":
    case "sunday":
        console.log(`${whatDay} is a weekend`);
        break
}


