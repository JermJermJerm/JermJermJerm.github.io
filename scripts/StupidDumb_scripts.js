
$("#convertButton").on("click", function(){
	
	var inputString = $("#inputText").val();
	
	var inputArray = inputString.toLowerCase();
	inputArray = inputArray.split("");
	
	var outputString = "";
	
	
	for (var i = 0; i < inputArray.length; i++){
		
		//We provide True because if we provide inputArray[i],
		//We can't use conditions
		
		switch(true){
			
			case(inputArray[i] >= "a" && inputArray[i] <= "z"):
				outputString += (":regional_indicator_" + inputArray[i] + ": ");
				break;
				
			case(inputArray[i] == "0"):
				outputString += ":zero:";
				break;
				
			case(inputArray[i] == "1"):
				outputString += ":one:";
				break;
				
			case(inputArray[i] == "2"):
				outputString += ":two:";
				break;
				
			case(inputArray[i] == "3"):
				outputString += ":three:";
				break;
				
			case(inputArray[i] == "4"):
				outputString += ":four:";
				break;
				
			case(inputArray[i] == "5"):
				outputString += ":five:";
				break;
				
			case(inputArray[i] == "6"):
				outputString += ":six:";
				break;
				
			case(inputArray[i] == "7"):
				outputString += ":seven:";
				break;
				
			case(inputArray[i] == "8"):
				outputString += ":eight:";
				break;
				
			case(inputArray[i] == "9"):
				outputString += ":nine:";
				break;
				
			case(inputArray[i] == "0"):
				outputString += ":zero:";
				break;
				
			case(inputArray[i] == " "):
				outputString += ":eggplant:";
				break;
				
			default:
				outputString += inputArray[i];
				
		} //end of switch
		
	} //end of for
	
	$("#outputTextarea").val(outputString);
	$("#outputTextarea").select();
});