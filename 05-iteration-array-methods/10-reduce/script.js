const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

const cart = [
	{id: 1, name: 'Pen', price: 10, count: 2},
	{id: 2, name: 'Pencil', price: 5, count: 3},
	{id: 3, name: 'Eraser', price: 2, count: 4},
];

const total = cart.reduce((acc, cur) => acc + cur.price * cur.count, 0);
console.log(total);