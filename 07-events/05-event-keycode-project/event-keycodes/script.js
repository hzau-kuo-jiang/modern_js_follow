/*
window.addEventListener('keyup', (e) => {
	const insert = document.querySelector('#insert');
	
	insert.innerHTML = `
  <div class="key">
  ${e.key === ' ' ? 'Space' : e.key}
  <small>event.key</small>
</div>
<div class="key">
  ${e.keyCode}
  <small>event.keyCode</small>
</div>
<div class="key">
  ${e.code}
  <small>event.code</small>
</div>
  `;
});*/

function showKeyCodes(e) {
	const insert = document.querySelector('#insert');
	insert.innerHTML = '';
	
	const keyCodes = {
		'e.key': e.key === ' ' ? 'Space' : e.key,
		'e.keyCode': e.keyCode,
		'e.code': e.code
	}
	
	for (const key in keyCodes) {
		const div = document.createElement('div');
		div.classList.add('key');
		const small = document.createElement('small');
		small.innerText = key;
		div.innerText = keyCodes[key];
		div.appendChild(small);
		insert.appendChild(div);
	}
	
}

window.addEventListener('keyup', showKeyCodes);