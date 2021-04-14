// Arrays, examples of array:
let empty = [];
let clasmates = ['Nicolaas', 'Nadine', 'Nemo'];
let oddNum = [1, 3, 5];
let mixed = ['Nicolaas', 1, 'Nadine'];

//Arrays methods:

let arr = ['Hi'];
let arr2 = ['Hi', 'Ho'];

//push()
arr.push('One'); // output: ['Hi', 'One'] ;
//pop()
arr.pop(); //output: ['Hi];
//shift()
arr2.shift(); // output: ['Ho'];
//unshift()
arr2.unshift('Ha'); // output: ['Ha', 'Ho'];
//Concat()
let arr3 = arr.concat(arr2); //output: ['Hi', 'Hi', 'Ho'];
//includes()
arr2.includes('Hi'); //true
arr2.includes('Ha'); //false
//indexOf()
arr2.indexOf('Ho'); //output:1
//join()
arr2.join(' ') //it can be filled with any separator that you want.
//reverse()
arr2.reverse(); //output: ['Ho','Hi'];
//slice()
arr2.slice(0, 1); //output: ['Hi', 'Ho'];
//splice()
arr2.splice(0, 2);//for deleting //output:[];
arr2.splice(1, 0, 'Hu'); //for add //output:['Hi', 'Ho', 'Hu']
arr2.splice(0, 1, 'Hu'); //for replacing //output:['Hi', 'Hu']
//sort()
arr2.sort(); //sorting from the alphabets