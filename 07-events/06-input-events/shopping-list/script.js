const itemInput = document.querySelector('#item-input');
const priorityInput = document.querySelector('#priority-input');
const checkbox = document.querySelector('#checkbox');
const heading = document.querySelector('h1');

function onInput(event) {
	console.log(event.target.value);
}

function onCheck(event) {
	const isChecked = event.target.checked;
	heading.textContent = isChecked ? 'Shopping List (Complete)' : 'Shopping List';
}

function onFocus(event) {
	console.log('Focus');
	itemInput.style.outline = '2px solid red';
}

function onBlur(event) {
	console.log('Blur');
	itemInput.style.outline = '';
}

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);
checkbox.addEventListener('input', onCheck);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);