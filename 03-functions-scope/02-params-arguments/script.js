// Default parameters
function registerUser(user = 'Guest') {
	return `User ${user} registered`;
}

console.log(registerUser('John'));
console.log(registerUser());

// Rest parameters
function sum(...numbers) {
	let total = 0;
	numbers.forEach(n => total += n);
	return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Object as parameter
function logUser({name, age, email}) {
	return `Name: ${name}, Age: ${age}, Email: ${email}`;
}

let user = {
	name: 'John',
	age: 30,
	email: 'John@gmail.com'
}
console.log(logUser(user));

// Array as parameter
function getRandom(...arr) {
	let index = Math.floor(Math.random() * arr.length);
	return arr[index];
}

console.log(getRandom(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));