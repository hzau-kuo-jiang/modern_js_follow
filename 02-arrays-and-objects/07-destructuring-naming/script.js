const firstName = 'Jonas';
const lastName = 'Schmedtmann';
const age = 40;

const Person = {
	firstName,
	lastName,
	age,
}

console.log(Person);

// Destructuring

const todo = {
	id: 1,
	title: 'Take out trash',
	user: {
		name: 'John',
	}
}

const {id: todoId, title, user: {name}} = todo;
console.log(todoId, title, name);

// Destructuring Arrays
const numbers = [23, 45, 67, 89, 12, 34, 56, 78, 90];
const [first, second, third, ...rest] = numbers;
console.log(first, second, third, rest);