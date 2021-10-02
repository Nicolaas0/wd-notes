const arr = [1, 2, 3, 4, 5, 6, 7];

// FOR EACH
arr.forEach((el) => {
  console.log(el);
});

// FOR OF
for (let el of arr) {
  console.log(el);
}
// FOR OF AND FOR EACH ITS THE SAME BUT, FOR OF IS NEWER THAN FOR EACH.

const names = [
  { first: "nicolaas", last: "lerrick" },
  { first: "harry", last: "potter" },
  { first: "sonic", last: "hadehog" },
  { first: "mikasa", last: "ackerman" },
];

// MAP
const firstName = names.map((el) => {
  return el.first;
});
console.log(firstName);
// MAP IS LIKE FOR EACH BUT AFTER MAPPING IT STORE THE ARRAY / RETURN THE VALUES IN THE ARRAY

// ARROW FUNCTION
const greet = () => {
  return "Hello!";
};

const square = (x) => {
  return x * x;
};

const plus = (a, b) => {
  return a + b;
};

const plus2 = (a, b) => a + b; // IF THERES ONLY ONE LINE, DONT HAVE TO USE () & RETURN, IT WILL RETURN AUTOMATICLY

// setTimeout()
console.log("HELLO WHO ARE YOU?");
setTimeout(() => {
  console.log("IM 3 SECOND LATE!");
}, 3000);

// setInterval() is repeating something in x time interval
// setInterval(() => {
//   console.log("AND IM ETERNAL");
// }, 1500);

// FILTER
const person = [
  { first: "nicolaas", last: "lerrick", height: 160 },
  { first: "harry", last: "potter", height: 170 },
  { first: "sonic", last: "hadehog", height: 150 },
  { first: "mikasa", last: "ackerman", height: 210 },
];

const tallPerson = person.filter((p) => {
  return p.height > 160;
});

console.log(tallPerson);
// IT FILTER THE ARRAY AND THE STORE THE VALUE INTO A ARRAY

//SOME AND EVERY

const testScore = [70, 80, 90, 60, 80, 50, 40, 30, 100];

const passSome = testScore.some((score) => {
  return score > 60;
});

const passEvery = testScore.every((score) => {
  return score > 60;
});
console.log(passSome); //RETURNS TRUE IF AT LEAST ONE ELEMENTS PASS
console.log(passEvery); // RETURNS TRUE IF ALL OF THE ELEMENT PASS

// SPREAD
const arr2 = [10, 20, 30];

const pluss = (a, b, c) => {
  return a + b + c;
};
console.log(pluss(...arr2)); // TECHINCALLY ITS TAKING ALL THE VALUE OUT OF THE ARRAY AND THEN PUT / SPREAD TO FIT IN THE PARAMS

const a = [1, 2, 3];
const b = [4, 5, 6];
console.log([...a, ...b]); // IT MERGE THE ARRAY
