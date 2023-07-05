const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const formBtn = itemForm.querySelector('button');
let isEditMode = false;

const displayItems = () => {
	const itemsFromStorage = getItemFromStorage();
	
	itemsFromStorage.forEach((item) => {
		addItemToDOM(item);
	});
	
	checkUI();
}

const onAddItemSubmit = (event) => {
	event.preventDefault();
	
	const newItem = itemInput.value.trim();

// 	Validate input
	if (newItem.length === 0) {
		alert('Please enter an item');
		return;
	}
	
	// Check for edit mode
	if (isEditMode) {
		const itemToEdit = document.querySelector('.edit-mode');
		
		removeItemFromStorage(itemToEdit.textContent);
		itemToEdit.classList.remove('edit-item');
		itemToEdit.remove();
		isEditMode = false;
	} else {
		// Check if item exists
		if (checkIfItemExists(newItem)) {
			alert('Item already exists');
			return;
		}
	}
	
	// Create item DOM element
	addItemToDOM(newItem);
	
	// Add item to local storage
	addItemToStorage(newItem);
	
	checkUI();

// 	Clear input
	itemInput.value = '';
}

const addItemToDOM = item => {
	// 	 Create list item
	const newListItem = document.createElement('li');
	newListItem.appendChild(document.createTextNode(item));
	
	const button = creatButton();
	newListItem.appendChild(button);
	
	itemList.appendChild(newListItem);
};

const addItemToStorage = (item) => {
	const itemsFromStorage = getItemFromStorage();
	
	itemsFromStorage.push(item);

// 	Convert to JSON string and set to local storage
	localStorage.setItem('items', JSON.stringify(itemsFromStorage));
	
}

const creatButton = () => {
	const button = document.createElement('button');
	button.classList.add('remove-item', 'btn-link', 'text-red');
	const icon = createIcon();
	button.appendChild(icon);
	return button;
}

const getItemFromStorage = () => {
	let itemsFromStorage;
	
	if (localStorage.getItem('items') === null) {
		itemsFromStorage = [];
	} else {
		itemsFromStorage = JSON.parse(localStorage.getItem('items'));
	}
	
	return itemsFromStorage;
}

const createIcon = () => {
	const icon = document.createElement('i');
	icon.classList.add('fa-solid', 'fa-xmark');
	return icon;
}

const onClickItem = (event) => {
	if (event.target.parentElement.classList.contains('remove-item')) {
		removeItem(event.target.parentElement.parentElement);
	} else {
		setItemToEdit(event.target);
	}
}

const checkIfItemExists = (item) => {
	const itemsFromStorage = getItemFromStorage();
	
	return itemsFromStorage.includes(item);
}

const setItemToEdit = (item) => {
	isEditMode = true;
	
	itemList.querySelectorAll('li').forEach((item) => item.classList.remove('edit-mode'));
	
	item.classList.add('edit-mode');
	formBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Update Item';
	formBtn.style.backgroundColor = '#228b22';
	itemInput.value = item.textContent;
	
}

const removeItem = (item) => {
	if (confirm('Are you sure?')) {
		item.remove();
		removeItemFromStorage(item.textContent);
		checkUI();
	}
}

const removeItemFromStorage = (item) => {
	let itemsFromStorage = getItemFromStorage();
	
	itemsFromStorage = itemsFromStorage.filter((itemFromStorage) => {
		return itemFromStorage !== item;
	});
	
	localStorage.setItem('items', JSON.stringify(itemsFromStorage));
	
}

const clearItems = () => {
	while (itemList.firstChild) {
		itemList.removeChild(itemList.firstChild);
	}
	// Clear from local storage
	localStorage.removeItem('items');
	checkUI();
}

const filterItems = (event) => {
	const text = event.target.value.toLowerCase();
	const items = itemList.querySelectorAll('li');
	items.forEach((item) => {
		const itemName = item.firstChild.textContent.toLowerCase();
		if (itemName.indexOf(text) !== -1) {
			item.style.display = 'flex';
		} else {
			item.style.display = 'none';
		}
	})
}

const checkUI = () => {
	itemInput.value = '';
	
	const items = itemList.querySelectorAll('li')
	if (items.length === 0) {
		clearBtn.style.display = 'none';
		itemFilter.style.display = 'none';
	} else {
		clearBtn.style.display = 'block';
		itemFilter.style.display = 'block';
	}
	
	formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
	formBtn.style.backgroundColor = '#333';
	
	isEditMode = false;
}

// Initialize app

const init = () => {
// Event listeners
	itemForm.addEventListener('submit', onAddItemSubmit);
	itemList.addEventListener('click', onClickItem);
	clearBtn.addEventListener('click', clearItems);
	itemFilter.addEventListener('input', filterItems);
	document.addEventListener('DOMContentLoaded', displayItems);
	
	checkUI();
}

init();