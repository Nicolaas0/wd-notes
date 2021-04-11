//Comparison
let greaterThan = ">";

let lessThan = "<";

let greaterThanOrEqualTo = ">=";

let lessThanOrEqualTo = "<=";

let equality = "==";

let notEqual = "!=";

let strictEquality = "===";

let strictNonEquality = "!==";

//Conditionals
let age = 10;

//IF statement
if (age >= 10){
    console.log('You are allowed to enter this zone.');
}

//ELSE IF statement
if (age >= 10) {
    console.log('You are still an adult');
} else if(age <= 10) {
    console.log('You are still a kid');
}

//ELSE statement
if (age !== 10) {
    console.log('You are not ten!') //True
} else {
    console.log('You are a ten'); //False
}

//Nested Conditionals
const thing = 'Sandwich';

if (thing.endsWith('h')) {
    if (thing.startsWith('s')) {
        console.log('OH i knew it, it is Sandwich!');
    }
} else {
    console.log('I dont know what is that thing');
}

//Notes : the first IF is checking if the thing is end with 'h', if its true, it will continue checking if its start with 's', and the else if for the first IF.