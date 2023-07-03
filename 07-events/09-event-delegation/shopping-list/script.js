const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach((item) => {
// 	item.addEventListener('click', (e) => {
// 		e.target.remove();
// 	});
// });

list.addEventListener('click', (e) => {
	if (e.target.tagName === 'I') {
		e.target.parentElement.parentElement.remove();
	}
});

list.addEventListener('mouseover', (e) => {
	if (e.target.tagName === 'LI') {
		e.target.style.textDecoration = 'line-through';
	}
});