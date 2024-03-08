const mobile = document.querySelector('.mobile');
const pc = document.querySelector('.pc');
let ratioEvent = window.devicePixelRatio > 1 ? 2 : 1;
const root = 'https://qwerewqwerew.github.io/';
let host = location.hostname;
let path = location.pathname;

let pcUrl = `${root}/pc/`;
let mUrl = `${root}/mobile/`;

if (ratioEvent > 1) {
	location.replace = mUrl;
} else {
	location.replace = pcUrl;
}

function pageChage(uri) {
	location.replace = uri;
}

mobile.addEventListener('click', function (e) {
	e.preventDefault();
	pageChage(mUrl);
});

pc.addEventListener('click', function (e) {
	e.preventDefault();
	pageChage(pcUrl);
});
// https://www.w3docs.com/snippets/javascript/how-to-redirect-mobile-devices-with-javascript-and-css.html

//https://github.com/sebarmeli/JS-Redirection-Mobile-Site