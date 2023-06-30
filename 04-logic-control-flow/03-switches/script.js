const d = new Date(2022, 1, 10, 8, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

switch (month) {
	case 0:
		console.log('January');
		break;
	case 1:
		console.log('February');
		break;
	case 2:
		console.log('March');
		break;
	default:
		console.log('It is not January, February, or March');
}

switch (hour) {
	case hour < 12:
		console.log('Good morning!');
		break;
	case hour < 18:
		console.log('Good afternoon!');
		break;
	default:
		console.log('Good night!');
}
