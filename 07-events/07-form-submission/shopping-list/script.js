const form = document.querySelector('#item-form');

function onSubmit(e) {
	e.preventDefault();
	
	const item = document.getElementById('item-input').value;
	const priority = document.getElementById('priority-input').value;
	
	if (item === '' || priority === '0') {
		alert('Please enter an item and select a priority');
		return;
	}
	
	console.log(item, priority);
}

function onSubmit2(e) {
	e.preventDefault();
	
	const formData = new FormData(e.target);
	// const item = formData.get('item');
	// const priority = formData.get('priority');
	
	// console.log(item, priority);
	
	const entries = formData.entries();
	for (const [name, value] of entries) {
		console.log(name, value);
	}
	
}

form.addEventListener('submit', onSubmit2);