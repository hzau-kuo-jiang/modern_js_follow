const x = 100;
console.log(x, 'in global scope');

function run() {
	console.log(window.innerHeight);
	console.log(x, 'in function scope')
}

run();

if (true) {
	console.log(x, 'in block scope')
}

function add() {
	const x = 1;
	const y = 40;
	console.log(y + x, 'in function scope')
}

// console.log(y)

add();