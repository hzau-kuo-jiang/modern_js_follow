const logo = document.querySelector('img');

function onClick(event) {
	console.log(event.target);
	console.log(event.currentTarget);
	console.log(event.type);
	console.log(event.timeStamp);
	console.log(event.clientX);
	console.log(event.clientY);
	console.log(event.offsetX);
	console.log(event.offsetY);
	console.log(event.pageX);
	console.log(event.pageY);
	console.log(event.screenX);
	console.log(event.screenY);
}

logo.addEventListener('click', onClick);

// document.body.addEventListener('click', onClick);

function onDrag(event) {
	document.querySelector('h1').textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
}

logo.addEventListener('drag', onDrag);

document.querySelector('a').addEventListener('click', function (event) {
	event.preventDefault();
	console.log('Link clicked');
});