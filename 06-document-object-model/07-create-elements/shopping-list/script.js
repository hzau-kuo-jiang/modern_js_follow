const div = document.createElement('div');
div.classList.add('my-element');
div.id = 'my-element';
div.setAttribute('title', 'My Element');

// div.innerText = 'Hello World';

const text = document.createTextNode('Hello World');
div.appendChild(text);

document.body.appendChild(div);