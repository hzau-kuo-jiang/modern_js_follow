const jokeEl = document.getElementById('joke');

function getJoke() {
	const xhr = new XMLHttpRequest();
	
	xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
	
	xhr.onreadystatechange = function () {
		if (this.readyState === 4) {
			if (this.status === 200) {
				const data = JSON.parse(this.responseText);
				jokeEl.innerHTML = data.value;
			} else {
				jokeEl.innerHTML = 'Something went wrong';
			}
		}
	}
	
	xhr.send();
}


const jokeBtn = document.getElementById('joke-btn');

jokeBtn.addEventListener('click', getJoke);
document.addEventListener('DOMContentLoaded', getJoke);