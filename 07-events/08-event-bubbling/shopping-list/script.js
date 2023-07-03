const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');
const form = document.querySelector('form');

button.addEventListener('click', (evt) => {
	console.log('You clicked me!');
	evt.stopPropagation();
});

div.addEventListener('click', () => {
	console.log('You clicked the div!');
});

form.addEventListener('click', () => {
	console.log('You clicked the form!');
});

document.body.addEventListener('click', () => {
	console.log('You clicked the body!');
});

