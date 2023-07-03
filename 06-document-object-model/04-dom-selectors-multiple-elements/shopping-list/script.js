// querySelectorAll returns a NodeList

const listItems = document.querySelectorAll('li');
console.log(listItems[1].innerText);

// listItems.forEach((item, index) => {
// 	item.style.color = 'red';
//
// 	if (index === 1) {
// 		item.remove();
// 	}
//
// 	if (index === 0) {
// 		item.innerHTML = `Oranges
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>`;
// 	}
// });

const listItems2 = document.getElementsByClassName('item');
console.log(listItems2[1].innerText);
const listItemsArray = Array.from(listItems2);
listItemsArray.forEach((item, index) => {
	console.log(item.innerText);
});

const listItems3 = document.getElementsByTagName('li');
console.log(listItems3[1].innerText);
const listItemsArray2 = Array.from(listItems3);
listItemsArray2.forEach((item, index) => {
	console.log(item.innerText);
});