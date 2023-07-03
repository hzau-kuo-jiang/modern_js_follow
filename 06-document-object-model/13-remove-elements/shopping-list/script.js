function removeClearButton() {
	const clearButton = document.querySelector('#clear');
	clearButton.remove();
}

removeClearButton();

function removeFirstItem() {
	const firstItem = document.querySelector('li:first-child');
	const ul = document.querySelector('ul');
	ul.removeChild(firstItem);
}

// removeFirstItem();

function removeItem(index) {
	const item = document.querySelector(`li:nth-child(${index})`);
	const ul = document.querySelector('ul');
	ul.removeChild(item);
}

removeItem(2);

function removeItem2(index) {
	const item = document.querySelectorAll('li')[index];
	const ul = document.querySelector('ul');
	ul.removeChild(item);
}

removeItem2(0);

function removeItem3(index) {
	const item = document.querySelectorAll('li');
	item[index].remove();
}

const removeItem4 = (index) => document.querySelectorAll('li')[index].remove();