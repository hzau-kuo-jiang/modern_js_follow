const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run() {
//   className
	console.log(itemList.className);
	// text.classList.add('dark');
	// text.classList.remove('card');
	// text.classList.toggle('hidden');
	text.classList.replace('card', 'dark');
	itemList.style.lineHeight = '3';
}

document.querySelector('button').onclick = run;