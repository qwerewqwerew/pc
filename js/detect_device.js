const mobile = document.querySelector('.mobile');
const pc = document.querySelector('.pc');
let ratioEvent = window.devicePixelRatio > 1 ? 2 : 1;
const root = 'https://qwerewqwerew.github.io/';
let host = location.hostname;
let path = location.pathname;

let pcUrl = `${root}/pc/`;
let mUrl = `${root}/mobile/`;

if (ratioEvent > 1) {
	location.href = mUrl;
} else {
	location.href = pcUrl;
}

function pageChage(uri) {
	location.href = uri;
}

mobile.addEventListener('click', function (e) {
	e.preventDefault();
	pageChage(mUrl);
});

pc.addEventListener('click', function (e) {
	e.preventDefault();
	pageChage(pcUrl);
});
