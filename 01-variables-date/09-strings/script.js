let x;

const name = 'John';
const age = 30;

x = 'Hello, my name is ' + name + ' and I am ' + age;

// Template string
x = `Hello, my name is ${name} and I am ${age}`;

// String Properties and Methods
// const s = 'Hello World';
const s = new String('Hello World');

x = s.length;

// Access value by index
x = s[0];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);
x = s.indexOf('o');

x = s.substring(0, 5).toUpperCase();

x = s.slice(-11, -6);

x = '     Hello World     '
x = x.trim();

x = s.replace('World', 'John');

x = s.includes('World');

x = s.valueOf();

x = s.split(' ');

console.log(x, typeof x)
