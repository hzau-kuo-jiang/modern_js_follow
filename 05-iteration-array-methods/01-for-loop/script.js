/*
for([initialization]; [condition]; [increment]) {
		// code to run
}
*/

for (let i = 0; i < 5; i++) {
	if (i === 7) {
		console.log('7 is my lucky number')
	} else {
		console.log(`Number ${i}`)
	}
}

// Nested for loop
for (let i = 0; i < 5; i++) {
	for (let j = 0; j < 5; j++) {
		console.log(`i: ${i}, j: ${j}`)
	}
}

// Loop through array
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota']
for (let i = 0; i < cars.length; i++) {
	if (i === 2) {
		console.log(`${cars[i]} is my favorite car`)
	} else {
		console.log(cars[i])
	}
}