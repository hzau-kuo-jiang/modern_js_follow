const listItems = document.querySelectorAll('li');

listItems.forEach((item) => {
	item.addEventListener('click', (e) => {
		e.target.classList.toggle('highlight');
	});
});