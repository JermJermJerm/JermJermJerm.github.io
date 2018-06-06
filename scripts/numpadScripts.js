if(window.jQuery){
		console.log("jquery was loaded.");
	}else{
		console.log("jquery was not loaded.");
	}
$(document).ready(function(){
	var lastField;
	
	$(".numField").focus(function(){
		lastField = this;
		console.log(lastField);
	});
	
	$(".numpadKey").on("click",(function(){
		var numpadText = $(this).children("p").text();
		lastField.value += numpadText;
		
	}));
	
});