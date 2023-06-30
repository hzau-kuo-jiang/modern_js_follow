((length, width) => {
	console.log(`The area of a rectangle with length ${length} and width ${width} is ${length * width}`)
})(10, 5);
const getCelsius = fahrenheit => (fahrenheit - 32) * 5 / 9

console.log(`The temperature is ${getCelsius(32)} \xB0C`)

const minMax = (...numbers) => ({
	min: Math.min(...numbers),
	max: Math.max(...numbers)
})

console.log(minMax(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
