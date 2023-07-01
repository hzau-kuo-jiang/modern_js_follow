// Loop through arrays
const items = ['book', 'pen', 'pencil', 'eraser', 'sharpner'];

for (const item of items) {
	console.log(item)
}

const users = [
	{name: 'John', age: 18},
	{name: 'Jane', age: 19},
	{name: 'Jerry', age: 20},
];

for (const user of users) {
	console.log(user)
}

// Loop through strings
const str = 'Hello World!';
for (const char of str) {
	console.log(char)
}

// Loop through maps
const map = new Map();
map.set('name', 'John');
map.set('age', 18);

for (const [key, value] of map) {
	console.log(key, value)
}
console.log(map);