const colorObj = {
	color1: 'red',
	color2: 'green',
	color3: 'blue'
};

for (let key in colorObj) {
	console.log(key, colorObj[key]);
}
console.log(colorObj);

const colorArr = ['red', 'green', 'blue'];
for (let index in colorArr) {
	console.log(index, colorArr[index]);
}