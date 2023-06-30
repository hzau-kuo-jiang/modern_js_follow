let x;

let arr = [23, 44, 47, 89, 18];

arr.push(100);
arr.pop();
arr.unshift(100);
arr.shift();
arr.reverse();

x = arr.includes(23);
x = arr.indexOf(18);
x = arr.slice(1, 3);
// x = arr.splice(1, 3);

x = arr.slice(1, 4).reverse().toString().charAt(0);

console.log(x);