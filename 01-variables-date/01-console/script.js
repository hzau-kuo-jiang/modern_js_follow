console.log(100);

console.log('Hello World');

console.log(20, 'Hello', true);

const x = 100;
console.log(x);

console.error('Error Message');
console.warn('Warning Message');

console.table({name: 'John', age: 30});

console.group('Simple Group');
console.log('Hello');
console.log('World');
console.groupEnd();

const styles = 'color: red; font-size: 20px; font-weight: bold;';
console.log('%cHello World', styles);