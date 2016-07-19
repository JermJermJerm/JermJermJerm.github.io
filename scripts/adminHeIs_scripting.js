/*
	isExpanded is used for sections that are only headers on load.
	This is defaulted to false on load.
	If the section header is shrunk and highlighted, isExpanded is true.
	IF the section header is large and white, and the description is hidden, isExpanded is false.
*/
var isExpanded = false;
var highlight = "#f39c12";
var clouds = "#ecf0f1";
// Header hover animation?



// When the description header / Who? is clicked..
$("#descHeader").on("click", function(){
		if(isExpanded == false){
			//Expand the container...
			
			//shrink the header size
			TweenMax.to($("#descHeader"), .25	, {fontSize: "32px", color: highlight});
			
			//make the description container larger
			TweenMax.to("#descContainer", .25, {height: "100px"});
			
			//change the description size
			TweenMax.to("#description", .25, {opacity:"255"});
			
			//Change state before exiting
			isExpanded = true;
		}
		else if(isExpanded){
			//enlarge the header size
			TweenMax.to("#descHeader", .25, {fontSize: "48px", color: clouds});
			
			//make the description container smaller
			TweenMax.to("#descContainer", .25, {height: "60px"});
			
			//change the description size
			TweenMax.to("#description", .25, {opacity: 0});
			
			//Change state before exiting
			isExpanded = false;
		}
});