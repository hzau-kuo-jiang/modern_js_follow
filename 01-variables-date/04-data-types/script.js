// String
const firstName = 'John';

// Number
const age = 30;
const temp = 30.5;

// Boolean
const hasKids = true;

// Null
const aptNumber = null;

// Undefined
let score;

// Symbol
const id = Symbol('id');

// BigInt
const bigNumber = 1234567890123456789012345678901234567890n;

// Reference Types
const numbers = [1, 2, 3, 4, 5];

const person = {
	name: 'John',
}

function sayHello() {
	console.log('Hello');
}

const output = sayHello;
console.log(output, typeof output);