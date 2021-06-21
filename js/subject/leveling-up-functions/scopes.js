// SCOPES IS ABOUT VISIBILITY
let apple = 0; //Declaring the variable as GLOBAL SCOPE

const addApple = () => {
    apple = 1; //Change the value of the variable as FUNCTION SCOPE
}

console.log(apple)
addApple();
console.log(apple)

//////////////////////////
let a = 1;

const valid = () => {
    if (a > 0) {
        const mess = 'Nice' //This is an BLOCK SCOPE
        console.log(mess) // BLOCK SCOPE
    }

    for (let i = 0; i < 2; i++){
        const text = 'Nicer'; //THIS IS ALSO BLOCK SCOPE
        console.log(text); // BLOCK SCOPE
    }
}

console.log(mess) //It will be error

//////////////////////////
const outer = () => {
    const fruits = ['Apple', 'Oranges'];
    const inner = () => {
        for (let fruit of fruits) {
            console.log(`I like ${fruit}`); // LEXICAL SCOPES, we can still access the variable that not from the function but it have to be the parent functions.
        }
    }
}