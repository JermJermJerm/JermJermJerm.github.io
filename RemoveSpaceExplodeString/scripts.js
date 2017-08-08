if(window.jQuery){
		console.log("jquery was loaded.");
	}else{
		console.log("jquery was not loaded.");
	}
$(document).ready(function(){
	$("#explodeButt").on("click", function(){
		var inputText = $("#inputArea").val();
		var delimiter = $("#delimiter").val();
		
		var outputArray = inputText.split(delimiter);
		
		$("#explodeUL").empty(); //delete all existing list items
		
		//populate
		for(var i=0; i<outputArray.length; i++){
			$("#explodeUL").append("<li>" + outputArray[i]  + "</li>");
		}
	});
});