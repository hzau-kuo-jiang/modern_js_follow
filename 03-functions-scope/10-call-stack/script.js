// First Example
//
// function first() {
// 	console.log("first function");
// }
//
// function second() {
// 	console.log("second function");
// }
//
// function third() {
// 	console.log("third function");
// }
//
// first();
// second();
// third();

// Second Example

function first() {
	console.log("first function");
	second();
}

function second() {
	console.log("second function");
	third();
}

function third() {
	console.log("third function");
}

first();