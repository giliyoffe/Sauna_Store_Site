function _(id){
	return document.getElementById(id);
}

function openNav() {
	document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

document.getElementsByClassName("closebtn")[0].addEventListener("click", closeNav);

// ---------- Bubble select headlines test  -------------

var bubbleArray, bubbleIndex=0, intrvl;

var contentsSlider = [
	'<h2>Set an appointment TODAY!</h2><p>+49 030 033 027</p>',
	'<h2>Heading Number 2</h2><p>Content for section 2</p>',
	'<h2>Heading Number 3</h2><p>Content for section 3</p>',
	'<h2>Heading Number 4</h2><p>Content for section 4</p>'
];

function changeSlide(bubbleIndex){
	// Fade-out the content
	_("bubblecontent").style.opacity = 0;
	for(var i=0; i < bubbleArray.length; i++){
		bubbleArray[i].style.background = "rgba(0,0,0,.1)";
	}
	// Change the target bubble background to be darker than the rest
	bubbleArray[bubbleIndex].style.background = "#999";
	// Stall the bubble and content changing for 200ms
	setTimeout(function(){
		// Change the content
		_("bubblecontent").innerHTML = contentsSlider[bubbleIndex];
		// Fade-in the content
		_("bubblecontent").style.opacity = 1;
	}, 200);
}

function bubbleSlide(){
	bubbleIndex++; 
	if(bubbleIndex == bubbleArray.length){
		bubbleIndex = 0;
	}
	changeSlide(bubbleIndex);
}

function bubbleClickHandler(index) {
	clearInterval(intrvl);
	changeSlide(index);
}

// Start the application up when document is ready
window.addEventListener("load", function(){
	var bbls = _("bubbles");
	bubbleArray = (bbls && bbls.children) || [];
	intrvl = setInterval(bubbleSlide, 3500);
	_('nav-open-btn').addEventListener('click', openNav);

	for (var i = 0; i < bubbleArray.length; i++) {
		bubbleArray[i].addEventListener('click', bubbleClickHandler.bind(null, i));
	}
});

