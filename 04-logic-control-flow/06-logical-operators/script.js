console.log(10 > 20 && 20 > 10);
console.log(10 > 20 || 20 > 10);
console.log(!(10 > 20 || 20 > 10));

// && - Will return first falsy value or last value

let a;

a = 10 && 20 && 30;

console.log(a);

const posts = [];
posts.length > 0 && console.log(posts[0]);

// || - Will return first truthy value or last value

let b;

b = 10 || 20 || 30;
b = '' || 20 || 30;

console.log(b);

// ?? - Returns the right side if the left side is null or undefined

let c;

c = null ?? 20;
c = undefined ?? 20;
c = 10 ?? 20;

console.log(c);