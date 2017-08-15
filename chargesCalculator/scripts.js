if(window.jQuery){
		console.log("jquery was loaded.");
	}else{
		console.log("jquery was not loaded.");
	}
$(document).ready(function(){
	
	var addOTC = function(){
		$("#OTC").append(
			$('<li class="charge one"></li>')
				.append('<p class="chargeName">Click here to change description</p>')
				.append('<input class="desc" type="hidden" placeholder="Click here to change description"/>')
				.append('<input class="OTCin" type="text"/>')
		);
	}
	
	$("#addOTC").on("click", function(){
		addOTC();
	});
	
	var addMRC = function(){
		$("#MRC").append(
			$('<li class="charge monthly"></li>')
				.append('<p class="chargeName">Click here to change description</p>')
				.append('<input class="desc" type="hidden" placeholder="Click here to change description"/>')
				.append('<input class="MRCin" type="text"/>')
		);
	}
	
	$("#addMRC").on("click", function(){
		addMRC();
	});
	
	var calculateOTC = function(){
		var total = 0; //have to declare as an int otherwise we get type issues
		
		var charges  = $(".OTCin").map(function(){
			if(this.value != ""){
			return parseInt(this.value);
			} else return 0;
		});
		
		for(var i = 0; i < charges.length; i++){
			total += charges[i];
		}
		
		return total;
	}
	
	$("#calculateOTC").on("click", function(){
		var OTCTotal = calculateOTC();
		$("#OTCTotal").text(OTCTotal);
	});
	
	var calculateMRC = function(){
		var total = 0; //have to declare as an int otherwise we get type issues
		var MRCtotal = 0;
		var months = 0;
		if($("#months").val() != ""){
			months = parseInt($("#months").val());
		}
		
		var charges = $(".MRCin").map(function(){
			if(this.value != ""){
				return parseInt(this.value);
			} else return 0;
		});
		
		for(var i = 0; i < charges.length; i++){
			total += charges[i];
		}
		
		MRCtotal = total * months;
		return MRCtotal;
	}
	
	$("#calculateMRC").on("click", function(){
		var MRCtotal = calculateMRC();
		$("#MRCTotal").text(MRCtotal);
	});
	
	$("#calculateTotal").on("click", function(){
		var OneTime = calculateOTC();
		var Monthly = calculateMRC();
		
		$("#OTCTotal").text(OneTime);
		$("#MRCTotal").text(Monthly);
		$("#tTotal").text(OneTime + Monthly);
		
		if($("#months").val() == ""){
			$("#tMonths").text("0");
		} else {
		$("#tMonths").text($("#months").val());
		}
	});
	
	$(document).on("click", ".chargeName", function(){
		$(this).siblings(".desc")
			.attr("type", "text")
			.select();
	})
	$(document).on("blur", ".desc", function(){
		$(this).attr("type", "hidden");
		$(this).siblings(".chargeName").text($(this).val());
	});
	
});