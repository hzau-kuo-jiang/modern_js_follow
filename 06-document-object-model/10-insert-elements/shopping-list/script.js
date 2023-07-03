// insertAdjacentElement Example
function insertElement() {
	const filter = document.querySelector('.filter');
	
	const h1 = document.createElement('h1');
	h1.textContent = 'insertAdjacentElement Example';
	
	filter.insertAdjacentElement('beforebegin', h1);
}

// insertAdjacentText Example
function insertText() {
	const item = document.querySelector('li:first-child');
	
	item.insertAdjacentText('afterbegin', 'insertAdjacentText Example');
}

// insertAdjacentHTML example
function insertHTML() {
	const clearBtn = document.querySelector('#clear');
	
	clearBtn.insertAdjacentHTML('afterend', '<h2>insertAdjacentHTML Example</h2>');
}


// insertBefore Example
function insertBeforeItem() {
	const ul = document.querySelector('ul');
	const li = document.createElement('li');
	li.textContent = 'Item';
	const li2 = document.querySelector('li:nth-child(2)');
	ul.insertBefore(li, li2);
}


insertElement();
insertText();
insertHTML();
insertBeforeItem();

/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/
