// Ways to declare variables
// var, let, const

let firstName = 'John';
let lastName = 'Smith';

console.log(firstName, lastName);

let age = 28;

console.log(age);

// Naming Conventions
// - Only use letters, numbers, $, _
// - Cannot start with a number

// Multi-word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// Re-assigned Variables
age = 30;
console.log(age);

let score;
score = 10;
console.log(score);

if (true) {
	score++;
}
console.log(score);

const x = 10;

const arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr);

const person = {
	name: 'John',
}
person.name = 'Sara';
person.email = 'sara@gmail.com';
console.log(person);

// Declare multiple variables at once

let a, b, c;
const d = 10, e = 20, f = 30;
console.log(d, e, f);