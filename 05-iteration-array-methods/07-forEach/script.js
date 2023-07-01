const socials = ['twitter', 'facebook', 'instagram', 'youtube'];

// console.log(socials.__proto__);

// socials.forEach((social, index, array) => {
// 	console.log(social, index, array);
// });

function logSocial(social) {
	console.log(social);
}

socials.forEach(logSocial);

const socialObj = [
	{name: 'twitter', url: 'https://twitter.com'},
	{name: 'facebook', url: 'https://facebook.com'},
	{name: 'instagram', url: 'https://instagram.com'},
	{name: 'youtube', url: 'https://youtube.com'},
];

socialObj.forEach((social) => {
	console.log(social.name, social.url);
});