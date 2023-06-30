let x;

const person = {
	name: 'John Doe',
	age: 30,
	isAdmin: true,
	address: {
		city: 'Boston',
		state: 'MA',
		street: '123 Main St'
	},
	hobbies: ['music', 'movies', 'sports'],
}

x = person.name;
x = person['age'];
x = person.address.street;
x = person.hobbies[1];

person.name = 'Jane Doe'
person['isAdmin'] = false;

delete person.age;

person.hasChildren = true;

person.greet = function () {
	console.log(`Hello, my name is ${this.name}`)
}

person.greet();

const person2 = {
	'first name': 'John',
	'last name': 'Doe'
}

x = person2['first name'];

console.log(x);