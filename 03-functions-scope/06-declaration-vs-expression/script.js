console.log(addDollarSign(5));

// Function Declaration
function addDollarSign(num) {
	return '$' + num;
}

// Function Expression
const addPlusSign = function (num) {
	return '+' + num;
};

console.log(addPlusSign(5));