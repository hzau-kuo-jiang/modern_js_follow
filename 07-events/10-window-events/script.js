// window.onload = function () {
// 	document.querySelector('h1').textContent = 'Hello world!';
// };

window.addEventListener('load', function () {
	console.log('The page has fully loaded');
});

window.addEventListener('DOMContentLoaded', function () {
	console.log('DOM is ready');
});

console.log('This is the first line of code in app.js.');


window.addEventListener('resize', function () {
	document.querySelector('h1').innerHTML = `Width: ${window.innerWidth} <br> Height: ${window.innerHeight}`;
});

window.addEventListener('scroll', function () {
	console.log(`You've scrolled ${window.scrollY} pixels`);
	
	if (window.scrollY > 100) {
		document.body.style.backgroundColor = '#f3f3f3';
	} else {
		document.body.style.backgroundColor = '';
	}
});

window.addEventListener('focus', function () {
	document.querySelectorAll('p').forEach(function (p) {
		p.style.color = 'salmon';
	});
});

window.addEventListener('blur', function () {
	document.querySelectorAll('p').forEach(function (p) {
		p.style.color = '';
	});
});