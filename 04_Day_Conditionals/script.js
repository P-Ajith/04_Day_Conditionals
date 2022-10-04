let num1 = 3;
if (num1 > 0) {
    console.log(`${num1} is positive number`);
}

let isRaining = true;
if (isRaining) {
    console.log("Remember to take rain coat");
}

let num2 = 3;
if (num2 > 0) {
    console.log(`${num2} is a positive number`);
} else {
    console.log(`${num2} is a negative number`);
}

let num3 = 0;
if (num3 > 0) {
    console.log(`${num3} is a positive number`);
} else {
    console.log(`${num3} is a negative number`);
}

let isRaining1 = true;
if (isRaining1) {
    console.log("take a rain coat");
} else {
    console.log("no need for rain coat, its sunny");
}

let isRaining2 = false;
if (isRaining2) {
    console.log("take a rain coat");
} else {
    console.log("no need for rain coat, its sunny");
}

let a = 5;
if (a > 0) {
    console.log(`${a} is a positive number`);
} else if (a < 0) {
    console.log(`${a} is a negative number`);
} else if (a == 0) {
    console.log(`${a} is zero`);
} else {
    console.log(`${a} is not a number`);
}

let weather = "cloudy";
if (weather === "rainy") {
    console.log("Take a rain coat");
} else if (weather === "cloudy") {
    console.log("Take a jacket");
} else if (weather === "sunny") {
    console.log("go out freely");
} else {
    console.log("no need for rain coat")
}

let weather1 = "moon";
switch (weather1) {
    case "sun":
        console.log("it is morning");
        break
    case "moon":
        console.log("it is night");
        break
    default:
        console.log("i think it is noon");
}
/*
let whatDay = prompt("What day is today?");
let day = whatDay.toLowerCase();

switch (day) {
    case "monday":
        console.log("Today is monday.");
        break
    case "tuesday":
        console.log("Today is tuesday.");
        break
    case "wednesday":
        console.log("Today is wednesday");
        break
    case "thursday":
        console.log("Today is thursday.");
        break
    case "friday":
        console.log("Today is friday.");
        break
    case "saturday":
        console.log("Today is saturday.");
        break
    case "sunday":
        console.log("Today is sunday.");
        break
    default:
        console.log("Spell the day correctly");

}


let number1 = prompt("Enter the number.");

switch (true) {
    case (number1 > 0):
        console.log("number is positive");
        break
    case (number1 == 0):
        console.log("number is zero");
        break
    case (number1 < 0):
        console.log("number is negative");
        break
    default:
        console.log("it is not an number");
}
*/

let isRaining3 = false;
isRaining3 ? console.log("Take a rain coat")
: console.log("its sunny day");