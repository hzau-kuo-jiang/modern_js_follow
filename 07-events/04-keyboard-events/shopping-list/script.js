const itemInput = document.querySelector('#item-input');

function onKeyPress(event) {
	console.log('Key Pressed');
}

function onKeyUp(event) {
	console.log('Key Up');
}

function onKeyDown(event) {

// 	key
// 	console.log(event.key);
// 	keyCode
// 	console.log(event.keyCode);
// 	code
// 	console.log(event.code);
	
	if (event.repeat) {
		console.log('Key is being held down');
	}
	
	if (event.ctrlKey && event.altKey && event.shiftKey) {
		console.log('You pressed ctrl+alt+shift+key');
	}
	
}

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);