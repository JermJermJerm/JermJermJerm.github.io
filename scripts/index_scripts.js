$(document).ready(function(){
	
	var highlight = "#f39c12";
	var clouds = "#ecf0f1";
	
	var SSRExpanded = false; //sunshine split randomizer
	var CCExpanded = false; //charge calculator
	var PWGExpanded = false; //PWGen
	var STRExpanded = false; //String Explosion
	var MINExpanded = false; //minifier
	var CASExpanded = false; //cases
	var SDExpanded = false; //StupidDumb

	// Header hover animation?

	var showDesc = function(element){
		//shouldn't access parameters directly after they've been passed but these lines were already here and they work so
		$(element).css("font-size", "48px"); //shrink header from 60->48
		$(element).css("color", highlight);
		$(element).siblings(".description").css("display", "block");
	};

	var hideDesc = function(element){
		
		$(element).css("font-size", "60px"); //return header from 72->48
		$(element).css("color", clouds);
		$(element).siblings(".description").css("display", "none");
	};
	
	
	/*
	will have to do css( this : value) ?	
	*/

	$(".descHeader").on("click", function(){
		switch(true){
			case ($(this).is("#SunsSR") && SSRExpanded == true):
				hideDesc(this);
				SSRExpanded = false;
				break;
			case ($(this).is("#SunsSR") && SSRExpanded == false):
				showDesc(this);
				SSRExpanded = true;
				break;
			case ($(this).is("#charge-calc") && CCExpanded == true):
				hideDesc(this);
				CCExpanded = false;
				break;
			case ($(this).is("#charge-calc") && CCExpanded == false):
				showDesc(this);
				CCExpanded = true;
				break;
			case ($(this).is("#PWGen") && PWGExpanded == true):
				hideDesc(this);
				PWGExpanded = false;
				break;
			case ($(this).is("#PWGen") && PWGExpanded == false):
				showDesc(this);
				PWGExpanded = true;
				break;
			case ($(this).is("#StrExp") && STRExpanded == true):
				hideDesc(this);
				STRExpanded = false;
				break;
			case ($(this).is("#StrExp") && STRExpanded == false):
				showDesc(this);
				STRExpanded = true;
				break;
			case ($(this).is("#minifier") && MINExpanded == true):
				hideDesc(this);
				MINExpanded = false;
				break;
			case ($(this).is("#minifier") && MINExpanded == false):
				showDesc(this);
				MINExpanded = true;
				break;
			case ($(this).is("#cases") && CASExpanded == true):
				hideDesc(this);
				CASExpanded = false;
				break;
			case ($(this).is("#cases") && CASExpanded == false):
				showDesc(this);
				CASExpanded = true;
				break;
			case ($(this).is("#StupidDumb") && SDExpanded == true):
				hideDesc(this);
				SDExpanded = false;
				break;
			case ($(this).is("#StupidDumb") && SDExpanded == false):
				showDesc(this);
				SDExpanded = true;
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