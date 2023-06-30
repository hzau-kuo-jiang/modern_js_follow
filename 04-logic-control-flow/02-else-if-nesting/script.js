const d = new Date(2022, 10, 30, 8, 0, 0);
const hours = d.getHours();

if (hours < 12) {
	console.log('Good Morning!');
} else if (hours < 18) {
	console.log('Good Afternoon!');
} else {
	console.log('Good Night!');
}

// Nested if
if (hours < 12) {
	console.log('Good Morning!');
	if (hours === 6) {
		console.log('Wake up!');
	}
} else if (hours < 18) {
	console.log('Good Afternoon!');
} else {
	console.log('Good Night!');
	if (hours >= 20) {
		console.log('zzzzz');
	}
}

if (hours>=7&&hours<=15){
	console.log('It is time to work');
}

if (hours===6||hours===20){
	console.log('Brush your teeth');
}