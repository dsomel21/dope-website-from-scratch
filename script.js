/* Parallax Scrolling Feature */
var yPos;
var backgroundImage;

window.addEventListener('scroll', function(){
	debugger;
	yPos = window.pageYOffset;
	backgroundImage = document.getElementById('image');
	backgroundImage.style.top = yPos * 1 + "px";
})