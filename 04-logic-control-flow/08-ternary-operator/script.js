const age = 19;

// Using an if statement
if (age >= 18) {
	console.log('You can vote');
} else {
	console.log('You cannot vote');
}

// Using a ternary operator
age >= 18 ? console.log('You can vote') : console.log('You cannot vote');

// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote' : 'You cannot vote';
console.log(canVote);
console.log(canVote2);

// Multiple statements

const auth = true;
let redirect;

if (auth) {
	alert('Welcome to the dashboard');
	redirect = '/dashboard';
} else {
	alert('Please login');
	redirect = '/login';
}

redirect = auth
		? (alert('Welcome to the dashboard'), '/dashboard')
		: (alert('Please login'), '/login');

redirect = auth
		? (alert('Welcome to the dashboard'), '/dashboard')
		: null;

auth && (alert('Welcome to the dashboard'), redirect = '/dashboard');

console.log(redirect);