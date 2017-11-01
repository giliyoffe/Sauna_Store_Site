function openNav() {
	document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

// ---------- Bubble select headlines test  -------------

// Simple function returns object reference for elements by ID
function _(id){return document.getElementById(id);}

var bubbleArray, bubbleIndex=0, intrvl;
// bca - Bubble Content Array. 
var bca = [
	'<h2>Heading Number 1</h2><p>Content for section 1</p>',
	'<h2>Heading Number 2</h2><p>Content for section 2</p>',
	'<h2>Heading Number 3</h2><p>Content for section 3</p>',
	'<h2>Heading Number 4</h2><p>Content for section 4</p>'
];

function bubbles(bubbleIndex){
	// Fade-out the content
	_("bubblecontent").style.opacity = 0;
	for(var i=0; i < bubbleArray.length; i++){
		bubbleArray[i].style.background = "rgba(0,0,0,.1)";
	}
	// Change the target bubble background to be darker than the rest
	bubbleArray[bubbleIndex].style.background = "#999";
	// Stall the bubble and content changing for just 300ms
	setTimeout(function(){
		// Change the content
		_("bubblecontent").innerHTML = bca[bubbleIndex];
		// Fade-in the content
		_("bubblecontent").style.opacity = 1;
	}, 300);
}

function bubbleSlide(){
	bubbleIndex++; 
	if(bubbleIndex == bubbleArray.length){
		bubbleIndex = 0;
	}
	bubbles(bubbleIndex);
}
// Start the application up when document is ready
window.addEventListener("load", function(){
	var bbls = _("bubbles")
	bubbleArray = (bbls && bbls.children) || [];
	intrvl = setInterval(bubbleSlide, 3500);
	_('nav-open-btn').addEventListener('click', openNav);
});
