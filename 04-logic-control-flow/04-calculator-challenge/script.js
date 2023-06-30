const calculator = (num1, num2, operator) => {
	let result;
	switch (operator) {
		case '+':
			result = num1 + num2;
			break;
		case '-':
			result = num1 - num2;
			break;
		case '*':
			result = num1 * num2;
			break;
		case '/':
			result = num1 / num2;
			break;
		default:
			result = 'Invalid operator';
	}
	return result;
}

console.log(calculator(2, 3, '+'));
console.log(calculator(2, 3, '-'));
console.log(calculator(2, 3, '*'));
console.log(calculator(2, 3, '/'));
console.log(calculator(2, 3, 'a'));