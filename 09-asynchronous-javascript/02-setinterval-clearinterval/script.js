// const intervalID = setInterval(myCallback, 1000, 'hello');
//
// function myCallback(a) {
// 	console.log(Date.now(), a);
// }

let intervalID;

function startChange() {
	if (!intervalID) {
		intervalID = setInterval(changeRandomColor, 1000);
	}
}

// function changeColor() {
// 	if (document.body.style.backgroundColor !== 'black') {
// 		document.body.style.backgroundColor = 'black';
// 		document.body.style.color = 'white';
// 	} else {
// 		document.body.style.backgroundColor = 'white';
// 		document.body.style.color = 'black';
// 	}
// }

function changeRandomColor() {
	let randomColor = Math.floor(Math.random() * 16777215).toString(16);
	document.body.style.backgroundColor = '#' + randomColor;
	randomColor = Math.floor(Math.random() * 16777215).toString(16);
	document.body.style.color = '#' + randomColor;
}


function stopChange() {
	clearInterval(intervalID);
	intervalID = null;
}

document.getElementById('stop').addEventListener('click', stopChange);
document.getElementById('start').addEventListener('click', startChange);