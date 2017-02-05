
var generatePW = function(length, lower, upper, nums, special){
	var le = length;
	console.log("le = " + le);
	
	var lo = lower;
	console.log("lo = " + lo);
	
	var u = upper;
	console.log("upper = " + u);
	
	var n = nums;
	console.log("n = " + n);
	
	var s = special;
	console.log("special = " + s);
	
	var specialChars = "!@#$%^&*()-_=+";
	var specialCharsArray = specialChars.split("");
	
	var charType;
	var coinFlip;
	var generatedPW = "";
	
	while(generatedPW.length <= le - 1){
		
		charType = Math.round(Math.random() * 2);
		console.log(charType);
		
		var temp;
		
		switch(charType){
			case 0: var tempNum = 0;
					while (tempNum < 65 || tempNum > 90)
					{
						tempNum = (Math.round(Math.random() * 90));
					}
					temp = String.fromCharCode(tempNum);
					
					if (lo == true && u == true){
						coinFlip = Math.round(Math.random());
						
						if(coinFlip == 0){
							//Lowercase
							temp = temp.toLowerCase();
						} else if (coinFlip == 1){
							//Uppercase
							temp = temp.toUpperCase();
						}
						
					} else if (lo == true && u == false){
						temp = temp.toLowerCase();
						
					} else if (lo == false && u == true){
						temp = temp.toUpperCase();
					}
					console.log("PW Length = " + generatedPW.length);
					console.log("temp = " + temp);
					generatedPW += temp;
					
					break; //Alphabetical characters -> upper or lower
			
			case 1: if (n == true){
					temp = Math.round(Math.random() * 10); //Random number
					
					console.log("PW Length = " + generatedPW.length);
					console.log("temp = " + temp);
					
					generatedPW += temp.toString();
					break; 
					}
					break; 
			
			case 2: if (s == true){ //special character
					var q = Math.round(Math.random() * specialCharsArray.length);
					temp = specialCharsArray[q];
					console.log("PW Length = " + generatedPW.length);
					console.log("temp = " + temp);
					generatedPW += temp;
					break;
					}
					break; 
		} //end of switch
	} // end of while
	return generatedPW;
};

$("#generateButton").on("click", function(){
	var pwLength = $("#pwLength").val();
	var lowercaseChars, uppercaseChars, numbers, specialChars;
	/*
	if(pwLength == ""){
		alert("Missing length.");
	} else if (pwLength > 32){
		alert("Desired length too long.");
	}
	*/
	if ( $("#lowercase").prop("checked") == true){
		lowercaseChars = true;
	} else {
		lowercaseChars = false;
	}
	
	if ( $("#uppercase").prop("checked") == true){
		uppercaseChars = true;
	} else {
		uppercaseChars = false;
	}
	
	if ( $("#numbers").prop("checked") == true){
		numbers = true;
	} else {
		numbers = false;
	}
	
	if ( $("#specialYes").prop("checked") == true){
		specialChars = true;
	} else {
		specialChars = false;
	}
	
	var pw = generatePW(pwLength, lowercaseChars, uppercaseChars, numbers, specialChars);
	$("#generatedPW").val(pw);
	
});