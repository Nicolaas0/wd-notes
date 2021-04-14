// Creating object
const myself = {
    firstName: 'Albert',
    lastName: 'Nicolaas',
    age: 12,
    favMovie: ['Catch me if you can', 'Friendzone'],
    happy:true
}

//accessing object
//Using bracket notation
myself["age"]; //output: 12
myself['favMovie'][1];//output: 'Friendzone'
//Using "."/dot
myself.firstName; // output: 'Albert'
myself.favMovie[1]; //output:'Friendzone'

// add & changin properties in object
myself.age = 18; //changin age value
myself.favFodd = 'Fried Rice'; //add properties

//ARRAY + OBJECTS

const profile = [
  {
    username: "nicolaas0",
    email: "nicolhh@gmail.com",
    password: "huhu123",
  },
  {
    username: "nadin123",
    email: "cutegril123@gmail.com",
    password: "bts223",
  },
  {
    username: "npapap123",
    email: "loremis@gmail.com",
    password: "some12444",
  },
];