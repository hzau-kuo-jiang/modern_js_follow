let x;

const fruits = ['apple', 'banana', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];
// fruits.push(berries);

// x = fruits[3][1];

const allFruits = [fruits, berries];
x = allFruits[1][2];

x = fruits.concat(berries);

// Spread operator (...)
x = [...fruits, ...berries];

// Flatten Array
const arr = [1, 2, [3, 4, [5, 6]]];
x = arr.flat(2);

x = Array.isArray(fruits);
x = Array.from('hello');
x = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

console.log(x);