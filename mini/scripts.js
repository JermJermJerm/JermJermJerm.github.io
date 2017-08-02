if(window.jQuery){
		console.log("jquery was loaded.");
	}else{
		console.log("jquery was not loaded.");
	}
$(document).ready(function(){
	
$("#unminified").val("");
	$("#minify").on("click", function(){
		
		var unminStr = $("#unminified").val();
		
		var minStr = unminStr.replace(/\s/g, '');
		
		$("#minified").val(minStr);
	});
	$("#copy").on("click", function(){
		$("#minified")
			.attr("disabled", false)
			.select();
		
		document.execCommand('copy');
		
		//can't select a disabled element, copying won't actually do anything if there's nothing selected.
		$("#minified").attr("disabled", true);
	});
});