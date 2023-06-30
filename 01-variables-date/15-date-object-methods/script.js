let x;
let d = new Date();

x = d.toString();

x = d.getTime();
x = d.valueOf();

x = d.getFullYear();
x = d.getMonth();
x = d.getDay();
x = d.getDate();
x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`

x = Intl.DateTimeFormat("zh-CN").format(d);
x = Intl.DateTimeFormat("en-Gb").format(d);

x = d.toLocaleString('default', {month: 'long'})
x = d.toLocaleString('default', {month: 'short'})
x = d.toLocaleString('zh-CN', {month: 'short'})
x = d.toLocaleString('en-US', {month: 'short'})

x = d.toLocaleString('default', {
	weekday: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric',
	second: 'numeric',
	timeZone: 'Asia/Shanghai'
})

console.log(x);