//Creating an string

let username = "Nicolaas"; //this is the right way to use string

let username2 = 'Nicolaas'; //single quote also can be used

// let username 3 = 'Nicolaas";  //it is the wrong way to use string.

let number = "23"; //although we type an number it still count as a string

let random = "^*&%&^%^&$&$%^$%^" //typing an symbol also count as a string

//String index

let string = "Honey";

string[0]; //the output will be "h" because its the first letter in the variable

//String Length

let string = "Chicken";

string.length; //the output will be 7, because it will return how much letter in the variable

// String method

let string = "Nicolaas";
//First method
string.toLowerCase(); //make all letter to lower case

//Second method
string.toUpperCase(); //make all letter to uppper case

//Third method
string.trim(); //trim all the whitespace

//We can also combine the method like
string.trim().toUpperCase();

// Method that really need an arguments
let string = "Holo is the dog name";

//indexOf();
string.indexOf(0); //the input will be "H" because the argument was set to 0 / the first letter of the variable

//slice();
string.slice(6, 12); //the input will be "is the" because the arguments start in the letter "i" and end in the letter "e"

//replace();
string.replace('Holo', 'Hili'); //it will replace the "Holo" with the "Hili"

//Template Literals
let template = `I just bought ${1 + 4 + 3} Watermelons` // the output will be "I just bought 8 Watermelons"

//Another examples:
let things = "Watermelons";
let person = "Nicolaas";
let verb = "bought";
let qty = "5";
let price = "1500";

let template = `${person} just ${verb} an ${things} and the total price is ${qty * price}`;

//The template created so u dont have to use :
let tempalate2 = person + " " + just + " " + "........";

//Math Object
//Here the example of Math Object in javascript:

Math.PI; //it will return PI number which is 3.14159265359

Math.random(); //it will return in range of 0 - 1.

Math.round(); //it will return the number that have been rounded.

Math.pow(); //it will power the number, example :
Math.pow(2, 5); //it will return 16 because 2 power 5;

Math.abs(); //it will make the number absoulte / from minus to positive, example :
Math.abs(-10); // the output is 10.

Math.floor(); //it will remove the decimal. Example :
Math.floor(2.999999); //the output is 3.

//Math can also be combined, Example :
Math.floor(Math.random()); //it will remove the decimal in the random number from 0-1 range.