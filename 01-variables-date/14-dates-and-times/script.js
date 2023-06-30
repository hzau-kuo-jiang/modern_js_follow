let d;

d = new Date();

d = d.toString();

d = new Date(2000, 0, 10, 10, 30, 0, 0);

d = new Date('2021-01-01T10:30:00');
d = new Date('01/01/2021 10:30:00');
d = new Date('2021-01-01 10:30:00');
d = new Date('2021-01-01');

d = Date.now();

d = new Date(2021, 0, 1, 10, 30, 0, 0);
d = d.getTime();
d = d.valueOf();

d = new Date(1487076708000);

d = Math.floor(Date.now() / 1000);

console.log(d);