var img_by_sections = [
	{n: 1, url: 'img/img1.jpg'},
	{n: 'gallery1-1', url: 'img/img2.jpg'},
	{n: 'gallery1-2', url: 'img/img3.jpg'},
	{n: 'gallery1-3', url: 'img/img4.jpg'},
	{n: 3, url: 'img/img5.jpg'},
	{n: 5, url: 'img/img6.jpg'},
	{n: 'gallery2-1', url: 'img/img7.jpg'},
	{n: 'gallery2-2', url: 'img/img8.jpg'},
	{n: 'gallery2-3', url: 'img/img9.jpg'},
	{n: 'gallery2-4', url: 'img/img10.jpg'},
	{n: 7, url: 'img/img11.jpg'},
	{n: 'gallery3-1', url: 'img/img12.jpg'},
	{n: 'gallery3-2', url: 'img/img13.jpg'},
	{n: 'gallery3-3', url: 'img/img14.jpg'},
	{n: 9, url: 'img/img15.jpg'},
	{n: 11, url: 'img/img16.jpg'},
	{n: 13, url: 'img/img17.jpg'}
]

img_by_sections.forEach(function(e){
	var section = document.getElementById('section'+e.n);
	section.setAttribute('style', 'background-image: url("' + e.url + '")');
});