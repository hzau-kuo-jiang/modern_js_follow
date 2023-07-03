// Quick & Dirty
function createListItem(item) {
	const li = document.createElement('li');
	li.innerHTML = ` ${item}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`;
	document.querySelector('.items').appendChild(li);
}


// Clean & Performant
function createNewItem(item) {
	const li = document.createElement('li');
	const button = document.createElement('button');
	const i = document.createElement('i');
	
	li.appendChild(document.createTextNode(item));
	button.classList.add('remove-item', 'btn-link', 'text-red');
	i.classList.add('fa-solid', 'fa-xmark');
	
	button.appendChild(i);
	li.appendChild(button);
	document.querySelector('.items').appendChild(li);
}


createListItem('Eggs');
createNewItem('Bread')