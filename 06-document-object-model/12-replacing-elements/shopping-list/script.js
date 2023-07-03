function replaceFirstItem() {
	const firstItem = document.querySelector('li:first-child');
	
	const newFirstItem = document.createElement('li');
	newFirstItem.textContent = 'Grapes';
	
	firstItem.replaceWith(newFirstItem);
}

function replaceSecondItem() {
	const secondItem = document.querySelector('li:nth-child(2)');
	
	secondItem.outerHTML = '<li>Oranges</li>';
}

function replaceAllItems() {
	const listItems = document.querySelectorAll('li');
	
	listItems.forEach((item, index) => {
		console.log(item.innerHTML);
		console.log(item.outerHTML);
		item.innerHTML = `item ${index + 1}`
	});
}

function replaceChildHeading() {
	const header = document.querySelector('header');
	const h1 = document.querySelector('header h1');
	
	const h2 = document.createElement('h2');
	h2.id = 'app-title';
	h2.textContent = 'Shopping List';
	header.replaceChild(h2, h1);
}

replaceFirstItem();
replaceSecondItem();
replaceAllItems();
replaceChildHeading();