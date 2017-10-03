var popups = [
	'paul',
	'jossy',
	'elliot',
	'hana',
	'kevin',
	'alienor',
	'thanh',
	'damien',
	'simon',
	'hugo',
	'raphael',
	'mehdi',
	'ichem',
	'elise'
];

popups.forEach(function(e){
	// console.log($('#link-'+e)[0]);
	$('#link-'+e)[0].onclick = function(){
		var popup = document.getElementById('popup-'+e);
		var container = document.getElementById('section-container');
		popup.setAttribute('class', 'popup-opened');
		container.setAttribute('class', 'blurred');
	};
});

$('.transparent-overlay').each(function(e){
	$(this).click(function(){
		$('.popup-opened').each(function(e){
			$(this).attr('class', 'popup-closed');
		})
		var container = document.getElementById('section-container');
		container.setAttribute('class', '');
	});
});

var contents = document.getElementsByClassName('popup-content');
$('.popup-content').each(function(i){
	contents[i].onclick = function(e){
		e.stopPropagation();
	}
})