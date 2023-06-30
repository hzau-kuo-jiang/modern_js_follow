// function add(a, b) {
// 		return a + b
// }

// Arrow function syntax
const add = (a, b) => {
	return a + b;
}

// Arrow function syntax with implicit return
const subtract = (a, b) => a - b;

// Can omit parentheses if only one argument
const double = a => a * 2;

// Returning an object
const returnObject = () => ({key: 'value'});

const numbers = [1, 2, 3];
numbers.forEach(number => console.log(number));

console.log(add(1, 2));
console.log(subtract(1, 2));
console.log(double(2));
console.log(returnObject());