
if(window.jQuery){
		console.log("jq");
	}else{
		console.log("nojq");
	}
$(document).ready(function(){
	//console.log("utilitiesscript loaded");
	
	
	$(".ACin").attr("maxlength", "3");
	
	$(".AClabel").on("click", function(){
		if($(this).hasClass("on")){
			console.log("TRUUU");
			$(this).removeClass("on").addClass("off");
			$(this).siblings().filter(".ACOnOff").val("off");
			
		} else {
			console.log("nah");
			$(this).removeClass("off").addClass("on");
			$(this).siblings().filter(".ACOnOff").val("on");
		}
	});
	
});