function getData(endpoint, callback) {
	const xhr = new XMLHttpRequest();
	
	xhr.open('GET', endpoint);
	
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			const data = JSON.parse(xhr.responseText);
			callback(data);
		}
	}
	
	setTimeout(() => {
		xhr.send();
	}, Math.random() * 3000 + 1000);
}

getData('./movies.json', (movies) => {
	console.log(movies);
	getData('./actors.json', (actors) => {
		console.log(actors);
		getData('./directors.json', (directors) => {
			console.log(directors);
		});
	});
});