// Create a promise
const promise = new Promise((resolve, reject) => {
//   Do some async stuff
	setTimeout(() => {
		console.log('Async work complete');
		resolve();
	}, 1000);
});

// promise.then(() => console.log('Ok!'));

const getUser = new Promise((resolve, reject) => {
	setTimeout(() => {
		let error = true;
		
		if (!error) {
			resolve({name: 'John', age: 26});
		} else {
			reject('Error: Something went wrong');
		}
	}, 1000);
});

getUser
		.then((person) => console.log(person))
		.catch((error) => console.log(error))
		.finally(() => console.log('Finally'));

console.log('Hello from the global scope');