const email = 'test@test.com';

if (email) {
	console.log('You passed in an email');
}

console.log(Boolean(email));


/*
Falsy values:
false
0
""
null
undefined
NaN
* */

let x;

x = false;
x = 0;
x = "";
x = null;
x = undefined;
x = NaN


/*
Truthy values:
Everything else that is not falsy
true
'0'
' '
'false'
[] - empty array
{} - empty object
function(){} - empty function
* */

x = true;
x = '0';
x = ' ';
x = 'false';
x = [];
x = {};
x = function () {
}

if (x) {
	console.log('This is true');
} else {
	console.log('This is false');
}

console.log(Boolean(x));

// Truthy and Falsy caveats
const children = 0;

if (children !== undefined) {
	console.log(`You have ${children} children`);
} else {
	console.log('You have no children');
}

// Checking for empty arrays
const posts = [];

if (posts.length > 0) {
	console.log('List posts');
} else {
	console.log('No posts');
}

// Checking for empty objects
const person = {};

if (Object.keys(person).length > 0) {
	console.log('Person exists');
} else {
	console.log('No person');
}

// Loose Equality(==)
console.log(false == 0);
console.log(false == '');
console.log(false == []);
console.log(false == {});// false
console.log('' == 0);
console.log('' == []);
console.log('' == {});// false
console.log(0 == []);
console.log(0 == {});// false
console.log([] == {});// false
console.log(null == undefined);
