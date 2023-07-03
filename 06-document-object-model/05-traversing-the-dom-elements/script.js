let output;

// Get child elements

const parent = document.querySelector('.parent');

output = parent.children;
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].textContent = 'Child Two';
parent.children[1].style.background = 'red';

parent.firstElementChild.textContent = 'First Child';
parent.lastElementChild.textContent = 'Last Child';

// Get parent elements from child
const child = document.querySelector('.child');
output = child.parentElement;
child.parentElement.style.border = '1px solid red';
child.parentElement.style.padding = '10px';

// Sibling elements
const secondChild = document.querySelector('.child:nth-child(2)');

output = secondChild.previousElementSibling;
output = secondChild.nextElementSibling;

secondChild.previousElementSibling.style.background = 'blue';
secondChild.nextElementSibling.style.background = 'salmon';


// console.dir(output);
console.log(output);