const changeText = () => {
	document.querySelector('h1').textContent = 'Hello from callback';
}
//
// setTimeout(changeText, 3000);

const timerId = setTimeout(changeText, 3000);

document.querySelector('#cancel').addEventListener('click', () => {
	console.log(timerId);
	clearTimeout(timerId);
	console.log('timer canceled')
});