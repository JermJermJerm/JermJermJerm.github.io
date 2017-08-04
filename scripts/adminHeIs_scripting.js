$(document).ready(function(){
	
	var highlight = "#f39c12";
	var clouds = "#ecf0f1";
	
	var whoExpanded = false;
	var whatExpanded = false;

	// Header hover animation?

	var showDesc = function(element){
		var that = element;
		
		$(element).css("font-size", "48px"); //shrink header from 72->48
		$(element).css("color", highlight);
		$(element).siblings(".description").css("display", "block");
	};

	var hideDesc = function(element){
		var that = element;
		
		$(element).css("font-size", "72px"); //return header from 72->48
		$(element).css("color", clouds);
		$(element).siblings(".description").css("display", "none");
	};
	
	
	/*
	will have to do css( this : value) ?	
	*/

	$(".descHeader").on("click", function(){
		switch(true){
			case ($(this).is("#who") && whoExpanded == true):
				hideDesc(this);
				whoExpanded = false;
				break;
			case ($(this).is("#who") && whoExpanded == false):
				showDesc(this);
				whoExpanded = true;
				break;
			case ($(this).is("#what") && whatExpanded == true):
				hideDesc(this);
				whatExpanded = false;
				break;
			case ($(this).is("#what") && whatExpanded == false):
				showDesc(this);
				whatExpanded = true;
				break;
		};
	});

});
/* When the description header / Who? is clicked..
$("#descHeader").on("click", function(){
		if(isExpanded == false){
			//Expand the container...
			
			//shrink the header size
			TweenMax.to($("#descHeader"), .25	, {fontSize: "32px", color: highlight});
			
			//make the description container larger
			TweenMax.to("#descContainer", .25, {height: "100px", width:"33%"});
			
			//change the description size
			TweenMax.to("#description", 1, {delay:.25, opacity:"255"});
			
			//Change state before exiting
			isExpanded = true;
		}
		else if(isExpanded){
			//Shrink the container...
			
			//change the description size
			TweenMax.to("#description", .25, {opacity: 0});
			
			//make the description container smaller
			TweenMax.to("#descContainer", .25, {delay: .25, height: "72px", width:"10%"});
			
			//enlarge the header size
			TweenMax.to("#descHeader", .25, {delay: .26, fontSize: "72px", color: clouds});
			
			//Change state before exiting
			isExpanded = false;
		}
});
*/