if(window.jQuery){
		console.log("jquery was loaded.");
	}else{
		console.log("jquery was not loaded.");
	}
$(document).ready(function(){
	
	//Encounter ++
	$("#encounterUp").on("click", function(){
		var encounters = parseInt($("#encounterText").text());
		encounters += 1;
		$("#encounterText").text(encounters);
	});
	
	//Encounter --
	$("#encounterDown").on("click", function(){
		var encounters = parseInt($("#encounterText").text());
		encounters -= 1;
		$("#encounterText").text(encounters);
	});
	
	
	//Catch ++
	$("#catchUp").on("click", function(){
		var catches = parseInt($("#catchText").text());
		catches += 1;
		$("#catchText").text(catches);
	});
	
	//Catch --
	$("#catchDown").on("click", function(){
		var catches = parseInt($("#catchText").text());
		catches -= 1;
		$("#catchText").text(catches);
	});
	
});