const clearBtn = document.querySelector('#clear');


/*
JavaScript Events Listeners

clearBtn.onclick = function () {
	console.log('Clicked');
}

clearBtn.onclick = function () {
	alert('Clicked');
}
* */

const clickHandler = () => {
	const itemList = document.querySelector('ul');
	const items = itemList.querySelectorAll('li');
	// itemList.innerHTML = '';
	// items.forEach(item => item.remove());
	
	while (itemList.firstChild) {
		itemList.removeChild(itemList.firstChild);
	}
	
};

// addEventListener
clearBtn.addEventListener('click', clickHandler);
// setTimeout(() => clearBtn.removeEventListener('click', clickHandler), 2000);
// setTimeout(() => clearBtn.click(), 2000);