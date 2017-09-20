if(window.jQuery){
		console.log("jquery was loaded.");
	}else{
		console.log("jquery was not loaded.");
	}
	
	var updateCounter = function(){
		
		console.log($("input:text[value='']").length);
		$("#remainingItems").html($("input:text[value='']").length);
	};
		
$(document).ready(function(){
	//console.log("utilitiesscript loaded");
	updateCounter();
	//headers
	$("#ACs").hover(function(){
		$(this).html("Air Conditioners");
	}, function(){
		$(this).html("ACs");
	});
	
	$("#UPSes").hover(function(){
		$(this).html("Uninterruptible Power Supplies");
	}, function(){
		$(this).html("UPSes");
	});
	
	$("#PDUs").hover(function(){
		$(this).html("Power Distribution Units");
	}, function(){
		$(this).html("PDUs");
	});
	
	$("#STSes").hover(function(){
		$(this).html("Static Transfer Switches");
	}, function(){
		$(this).html("STSes");
	});
	
	$(".ACin").attr("maxlength", "3");
	
	$(".AClabel").on("click", function(){
		if($(this).hasClass("on")){
			
			$(this).removeClass("on").addClass("off");
			
			$(this).siblings().filter(".ACOnOff").val("off");
			$(this).siblings().filter(".ACin").val("0");
			$(this).siblings().filter(".ACin").attr("disabled", "disabled");
			$(this).siblings().filter(".ACin").hide();
			$(this).siblings().filter(".ACin").removeClass("on").addClass("off");
			
			updateCounter();
		} else {
			
			$(this).removeClass("off").addClass("on");
			
			$(this).siblings().filter(".ACOnOff").val("on");
			$(this).siblings().filter(".ACin").val("");
			$(this).siblings().filter(".ACin").removeAttr("disabled");
			$(this).siblings().filter(".ACin").show();
			$(this).siblings().filter(".ACin").removeClass("off").addClass("on");
			
			updateCounter();
		}
	});
	
	$(".UPSlabel").on("click", function(){
		if($(this).hasClass("on")){
			
			$(this).removeClass("on").addClass("off");
			
			$(this).siblings().filter(".UPSOnOff").val("off");
			$(this).siblings().filter(".UPSin").val("0").attr("disabled", "disabled");
			$(this).siblings().filter(".UPSin").hide();
			$(this).siblings().filter(".UPSin").removeClass("on").addClass("off");
			
			
			updateCounter();
		} else {
			
			$(this).removeClass("off").addClass("on");
			
			$(this).siblings().filter(".UPSOnOff").val("on");
			$(this).siblings().filter(".UPSin").val("").removeAttr("disabled");
			$(this).siblings().filter(".UPSin").show();
			$(this).siblings().filter(".UPSin").removeClass("off").addClass("on");
			
			updateCounter();
		}
	});
	$(".PDUlabel").on("click", function(){
		if($(this).hasClass("on")){
			
			$(this).removeClass("on").addClass("off");
			$(this).siblings().filter(".PDUOnOff").val("off");
			$(this).siblings().filter(".PDUin").val("0").attr("disabled", "disabled");
			$(this).siblings().filter(".PDUin").hide();
			$(this).siblings().filter(".PDUin").removeClass("on").addClass("off");
			
			updateCounter();
			
		} else {
			
			$(this).removeClass("off").addClass("on");
			$(this).siblings().filter(".PDUOnOff").val("on");
			$(this).siblings().filter(".PDUin").val("").removeAttr("disabled");
			$(this).siblings().filter(".PDUin").show();
			$(this).siblings().filter(".PDUin").removeClass("off").addClass("on");
			
			updateCounter();
		}
	});
	
});