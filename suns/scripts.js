if(window.jQuery){
		console.log("jquery was loaded.");
	}else{
		console.log("jquery was not loaded.");
	}
$(document).ready(function(){
	
	var rollLevel = function(max){
		var levelNum = Math.round(Math.random()*max);
		return levelNum;
	}
	
	$("#random").on("click", function(){
		
		var areas = $(".area:checked").map(function(){
		  return $(this).val();
		}).get(); 
		
		console.log("areas length: " + areas.length);
		console.log("Areas selected:");
		
		for(var i = 0; i <= areas.length-1; i++){
			console.log("i = " + i);
			console.log(areas[i]);
		}
			
		/*
		var areaNum = Math.round(Math.random()*6);
		var levels = function(area){
			switch(area){
				case "Bianco Hills":
			}
		}
		*/
	
	});
});