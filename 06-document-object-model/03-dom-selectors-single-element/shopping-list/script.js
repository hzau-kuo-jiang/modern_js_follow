// document.getElementById()

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').getAttribute('id'));

// Set attributes
document.getElementById('app-title').setAttribute('title', 'My Shopping List');
document.getElementById('app-title').setAttribute('class', 'title');

const title = document.getElementById('app-title');

// Get/change content
console.log(title.textContent);
title.textContent = 'My Shopping List';
title.innerText = 'My New Shopping List';
title.innerHTML = '<strong>My Shopping List</strong>';

// Change styles
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '15px';

// document.querySelector()
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.ccontainer'));
console.log(document.querySelector('input[type="text"]'));
const secondItem = document.querySelector('li:nth-child(2)');
secondItem.style.color = 'red';
secondItem.innerText = 'Apple Juice';

// Use these methods on other elements
const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';