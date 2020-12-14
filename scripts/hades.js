if(window.jQuery){
		console.log("jquery was loaded.");
	}else{
		console.log("jquery was not loaded.");
	}
	
$(document).ready(function(){
/*
var heartbreak_strike = "./Heartbreak_Strike.png";
var curse_of_agony = "./Curse_of_Agony.png";
var deadly_strike = "./Deadly_Strike.png";
*/
	$("#tier1").children(".boon").on("click", function(){
		
		if($(this).hasClass("common")){
			$(this).removeClass("common").addClass("rare");
			
		}else if($(this).hasClass("rare")){
			$(this).removeClass("rare").addClass("epic");
			
		}else if($(this).hasClass("epic")){
			$(this).removeClass("epic").addClass("heroic");
			
		}else if($(this).hasClass("heroic")){
			$(this).removeClass("heroic").addClass("legendary");
			
		}else if($(this).hasClass("legendary")){
			$(this).removeClass("legendary").addClass("duo");
		}
		else if($(this).hasClass("duo")){
			$(this).removeClass("duo").addClass("common");
		}
	});
	
	$("#resetAttack").on("click", function(){
		$("#attack").css("background-image", "url('')");
		$("#attack > p").text("Attack");
		$("#attack").removeClass("rare epic heroic legendary duo").addClass("common");
	});
	
	/*
	$("#heartbreak_strike").on("click", function(){
		$("#attack").css("background-image", "url(" + heartbreak_strike + ")");
		$("#attack > p").text("");
	});
	
	$("#curse_of_agony").on("click", function(){
		$("#attack").css("background-image", "url(" + curse_of_agony + ")");
		$("#attack > p").text("");
	});
	$("#deadly_strike").on("click", function(){
		$("#attack").css("background-image", "url(" + deadly_strike + ")");
		$("#attack > p").text("");
	});
	*/
});