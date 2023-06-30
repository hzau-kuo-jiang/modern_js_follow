// Values are stored on the stack
const name = "John";
const age = 30;

// Reference values are stored on the heap
const person = {
	name: "Brad",
	age: 36
}

let newName = name;
newName = "Jack";

let newPerson = person;
newPerson.name = "Bob";

console.log(name, newName);
console.log(person, newPerson);