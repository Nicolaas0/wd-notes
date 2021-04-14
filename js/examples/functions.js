//Defining our first function
function first() {console.log('Hello World!');}
//Executing the function
first();

//Arguments
function greet(name) {console.log('Hi' + name);}
//Executing the function
greet('Nicolaas');
//one more example, this is more than one arguments
function multiplication(a, b, c) { console.log(a * b * c); }
//Executing the function
multiplication(3, 4, 5);

//Return function
function plus(a, b) {
    return a + b;
}

plus(11, 23); // the output will be return the result of the function.
//or we can use it for the variables to capture the value from return
let result = plus(11, 23); // now the value of the result variable is 34.