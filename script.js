/* Parallax Scrolling Feature */
var yPos;
var backgroundImage;

window.addEventListener('scroll', function(){
	yPos = window.pageYOffset;
	backgroundImage = document.getElementById('image');
	backgroundImage.style.top = yPos * .4 + "px";
});

$('#card').click(function(){
	$(this).toggleClass('flipped');
});