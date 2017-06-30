if(window.jQuery){
		console.log("jquery was loaded.");
	}else{
		console.log("jquery was not loaded.");
	}
$(document).ready(function(){
	//console.log("utilitiesscript loaded");
	
	
	$(".ACin").attr("maxlength", "3");
	
	$(".AClabel").on("click", function(){
		if($(this).hasClass("on")){
			
			$(this).removeClass("on").addClass("off");
			$(this).siblings().filter(".ACOnOff").val("off");
			$(this).siblings().filter(".ACin").val("0").attr("disabled", "disabled");
			
		} else {
			
			$(this).removeClass("off").addClass("on");
			$(this).siblings().filter(".ACOnOff").val("on");
			$(this).siblings().filter(".ACin").val("").removeAttr("disabled");
			
		}
	});
	
});