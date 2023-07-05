const xhr = new XMLHttpRequest();

// xhr.open('GET', './movies.json');
xhr.open('GET', 'https://api.github.com/users/hzau-kuo-jiang/repos');

xhr.onreadystatechange = function () {
	if (this.readyState === 4 && this.status === 200) {
		const data = JSON.parse(this.responseText);
		data.forEach(repo => {
			const listItem = document.createElement('li');
			// listItem.innerHTML = `<strong>${repo.name}</strong>: ${repo.html_url}`;
			listItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
			
			document.getElementById('results').appendChild(listItem);
		});
	}
}

xhr.send();