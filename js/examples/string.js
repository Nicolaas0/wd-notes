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
