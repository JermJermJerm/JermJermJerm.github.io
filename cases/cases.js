$(document).ready(function(){
	
	var explode = function(ex){
		var firstArray = ex.split(''); //Turn into a charArray
		console.log(firstArray);
		
		var explodeString = "";
		
		for(var i=0; i<firstArray.length; i++){
				explodeString += firstArray[i];
				explodeString += "  ";
		}
		
		console.log(explodeString);
		
		
		return explodeString;
		
	};
	
	$("#your").on("change", function(){
		$("#upper").val(($("#your").val().toUpperCase()));
		$("#lower").val(($("#your").val().toLowerCase()));
		$("#explode").val(explode($("#your").val()));
	});
	
	
		$("input").on("click", function(){
		$(this).select();
		document.execCommand('copy');
	});
});