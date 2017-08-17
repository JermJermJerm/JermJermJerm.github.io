if(window.jQuery){
		console.log("jquery was loaded.");
	}else{
		console.log("jquery was not loaded.");
	}
	
$(document).ready(function(){
	
	//the actual function that will un/check all the shines in a given area
	var checkThings = function(area){
		
		var allShines = $(".shine"); //get every .shine input as an array
		var areaShines = [];
		var areaChecked = true;
		
		switch(area){
			case "BH":
				areaShines = $(allShines).filter(".bianco");
				areaChecked = $("#BH").is(":checked");
				for(var i = 0; i < areaShines.length; i++){
					areaShines[i].checked = areaChecked;	
				}
				break;
			case "GB":
				areaShines = $(allShines).filter(".gelato");
				areaChecked = $("#GB").is(":checked");
				for(var i = 0; i < areaShines.length; i++){
					areaShines[i].checked = areaChecked;	
				}
				break;
			case "PV":
				areaShines = $(allShines).filter(".pianta");
				areaChecked = $("#PV").is(":checked");
				for(var i = 0; i < areaShines.length; i++){
					areaShines[i].checked = areaChecked;	
				}
				break;
			case "PP":
				areaShines = $(allShines).filter(".pinna");
				areaChecked = $("#PP").is(":checked");
				for(var i = 0; i < areaShines.length; i++){
					areaShines[i].checked = areaChecked;	
				}
				break;
			case "RH":
				areaShines = $(allShines).filter(".ricco");
				areaChecked = $("#RH").is(":checked");
				for(var i = 0; i < areaShines.length; i++){
					areaShines[i].checked = areaChecked;	
				}
				break;
			case "SB":
				areaShines = $(allShines).filter(".sirena");
				areaChecked = $("#SB").is(":checked");
				for(var i = 0; i < areaShines.length; i++){
					areaShines[i].checked = areaChecked;	
				}
				break;
			case "NB":
				areaShines = $(allShines).filter(".noki");
				areaChecked = $("#NB").is(":checked");
				for(var i = 0; i < areaShines.length; i++){
					areaShines[i].checked = areaChecked;	
				}
				break;
		}
		
	};
	
	//un/checking all shines related to a given area
	$("#BH").on("change", function(){
		
		checkThings("BH");
	});
	$("#GB").on("change", function(){
		
		checkThings("GB");
	});
	$("#PV").on("change", function(){
		
		checkThings("PV");
	});	
	$("#PP").on("change", function(){
		
		checkThings("PP");
	});	
	$("#RH").on("change", function(){
		
		checkThings("RH");
	});	
	$("#SB").on("change", function(){
		
		checkThings("SB");
	});	
	$("#NB").on("change", function(){
		
		checkThings("NB");
	});
	
	//unchecking the area if the area is checked,m
	$("input.shine").on("change", function(){
		var shineClass = "";
		
		switch(true){
			case $(this).is(".bianco"):
				if($("#BH").is(":checked")){
					$("#BH").prop("checked", false);
				} else if ($(".bianco").not(":checked").length == 0){
					$("#BH").prop("checked", true);
				}
				break;
			case $(this).is(".gelato"):
				if($("#GB").is(":checked")){
					$("#GB").prop("checked", false);
				} else if ($(".gelato").not(":checked").length == 0){
					$("#GB").prop("checked", true);
				}
				break;
			case $(this).is(".pianta"):
				if($("#PV").is(":checked")){
					$("#PV").prop("checked", false);
				} else if ($(".pianta").not(":checked").length == 0){
					$("#PV").prop("checked", true);
				}
				break;
			case $(this).is(".pinna"):
				if($("#PP").is(":checked")){
					$("#PP").prop("checked", false);
				} else if ($(".pinna").not(":checked").length == 0){
					$("#PP").prop("checked", true);
				}
				break;
			case $(this).is(".ricco"):
				if($("#RH").is(":checked")){
					$("#RH").prop("checked", false);
				} else if ($(".ricco").not(":checked").length == 0){
					$("#RH").prop("checked", true);
				}
				break;
			case $(this).is(".sirena"):
				if($("#SB").is(":checked")){
					$("#SB").prop("checked", false);
				} else if ($(".sirena").not(":checked").length == 0){
					$("#SB").prop("checked", true);
				}
				break;
			case $(this).is(".noki"):
				if($("#NB").is(":checked")){
					$("#NB").prop("checked", false);
				} else if ($(".noki").not(":checked").length == 0){
					$("#NB").prop("checked", true);
				}
				break;
		}
		
	});
	
	//Picking a shine
	$("#random").on("click", function(){
		
		var ActiveShines = $(".shine:checked").map(function(){
		  return this.value;
		});

		if(ActiveShines.length != 0){
			var shineNum = Math.round(Math.random() * (ActiveShines.length-1));
			
			console.log(ActiveShines[shineNum]);
		} else {
			console.log("no shines selected");
		}
		
		/*
		for(var i = 0; i <= shines.length-1; i++){
			console.log("i = " + i);
			console.log(shines[i]);
		}*/
	
	});
});