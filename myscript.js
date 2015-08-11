// fakeloader
$(".fakeloader").fakeLoader({
	timeToHide:1500,
	zIndex:"999",
	spinner:"spinner2",
	bgColor:"#E6E5E1"
});

// Summon the sushi
twemoji.parse(document.body, {
	size: 72
});

// Flowing sushi
$(document).ready(function(){
	$('#sushi_kaiten').bxSlider({
		ticker: 'true',
		speed: 10000,
		minSlides: 10,
		maxSlides: 5,
		slideWidth: 1000,
		slideMargin: 10
	});
});