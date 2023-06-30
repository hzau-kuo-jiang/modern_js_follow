let x;

// Array Literal
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, 'Hello', true, undefined, null, new Date(), {a: 1, b: 2}];

// Array Constructor
const fruits = new Array('apple', 'banana', 'orange', 'pear');

x = numbers[0];
x = numbers[0] + numbers[3];

x = `My favorite fruit is ${fruits[2]}.`;
x = numbers.length;

fruits[4] = 'grape';
// fruits.length = 2;
fruits[fruits.length] = 'mango';
fruits[fruits.length] = 'watermelon';
x = fruits;

console.log(x);