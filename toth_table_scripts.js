//Declare all global variables first
/*1 = sept 16
  2 = sept 17
  3 = sept 18*/
var day = 1;
console.log(day);

//declare table
var table = document.getElementById("schedule");
console.log(table);

//Day button event listeners - used to see which button is pressed and change the Day variable accordingly
var day1Button, day2Button, day3Button;
day1Button = document.getElementById("Day1button");
day2Button = document.getElementById("Day2button");
day3Button = document.getElementById("Day3button");


//Day 1 stuff
var day1Times = ["11AM", "1PM", "3PM", "5PM", "6PM", "8PM", "9PM", "10PM", "", ""];
var day1Segments = ["Introduction", "6v6 NA vs EU", "Communities Pub", 
"1v1 MGE Tournament", "TF2 Variety Block", "Pubs", "Dreamcast Block", "Day 1 Wrap - MvM", "", ""];
var day1DonationIncentives = ["", "Ping Advantage Bid War", "", "No Chairs", "Sideshow GoPro", 
"", "", "", "", ""];

//Day 2 stuff
var day2Times = ["11AM", "12PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM"];
var day2Segments = ["Intro Pubs", "Source Filmmaker", "Variety Block", "Pubs", "Ultiduo Tourney",
"Pubs", "TF2 Surf", "Co-op Pubbing", "Jackbox Party Pack", "Day 2 Wrap - Pubs"];
var day2DonationIncentives = ["", "", "", "Sideshow Box + Controller", "", 
"Players Switch Mice", "", "Co-op Surfing", "", "", ""];

//Day 3 stuff
var day3Times = ["11AM", "12PM", "1PM", "2PM", "4PM", "5PM", "6PM", "7PM", "8PM", "10PM"];
var day3Segments = ["Intro Pubs", "Source Filmmaker", "Pubs", "Jump", "Pubs", "Variety Block", "Pubs",
"Keep Talking & Nobody Explodes", "Dota Fortress", "Event Wrap"];
var day3DonationIncentives = ["", "", "", "Pipe Launcher Jump Race", "", "", "Pyro Hero", 
"Echo Delay", "", ""];


 
var insertRows = function()
{
	console.log("insertRows is executed");
	//create 10 rows with their 3 child cells
	for (var i = 1; i < 10; i++)
	{
		var row = table.insertRow(i);
		var cell0 = row.insertCell(0);
		var cell1 = row.insertCell(1);
		var cell2 = row.insertCell(2);
		
		//Assign ids
		row.id = "row" + i; //row#
		cell0.id = "row" + i + "T"; //row#T for Time
		cell1.id = "row" + i + "S"; //row#S for Segment
		cell2.id = "row" + i + "D"; //row#D for DonationIncentive
		
		//Insert corresponding info depenwding on the day - i-1 because counter starts at 1, arrays start with 0
		cell0.innerHTML = day1Times[i-1];
		cell1.innerHTML = day1Segments[i-1];
		cell2.innerHTML = day1DonationIncentives[i-1];
	}
};

var changeRows = function()
{
	//Change all innerHTML of the schedule rows using array data
	console.log("changing rows...");
	for (var i = 1; i < 10; i++)
	{
		
		switch(day)
		{
			case 1: 
				document.getElementById("row" + i + "T").innerHTML = day1Times[i-1]; //array starts from 0
				document.getElementById("row" + i + "S").innerHTML = day1Segments[i-1];
				document.getElementById("row" + i + "D").innerHTML = day1DonationIncentives[i-1];
				break;
				
			case 2:
				document.getElementById("row" + i + "T").innerHTML = day2Times[i-1]; //array starts from 0
				document.getElementById("row" + i + "S").innerHTML = day2Segments[i-1];
				document.getElementById("row" + i + "D").innerHTML = day2DonationIncentives[i-1];
				break;
			case 3:
				document.getElementById("row" + i + "T").innerHTML = day3Times[i-1]; //array starts from 0
				document.getElementById("row" + i + "S").innerHTML = day3Segments[i-1];
				document.getElementById("row" + i + "D").innerHTML = day3DonationIncentives[i-1];
				break;
		}
		
	}
};

//Add event listeners
day1Button.addEventListener("click", function(){
	//Change day to 1, remove 'selected' class from other buttons, add 'selected' class to day 1
	//Change rows accordingly
	day = 1;
	
	/*
	document.getElementById("Day1").removeClass("notSelected");
	document.getElementById("Day2").removeClass("selected");
	document.getElementById("Day3").removeClass("selected");
	
	document.getElementById("Day1").addClass("selected");
	document.getElementById("Day2").addClass("notSelected");
	document.getElementById("Day3").addClass("notSelected");
	*/
	
	changeRows();
});

day2Button.addEventListener("click", function(){
	//Change day to 2, remove 'selected' class from other buttons, add 'selected' class to day 2
	//Change rows accordingly
	day = 2;
	
	/*
	document.getElementById("Day1").removeClass("selected");
	document.getElementById("Day2").removeClass("notSelected");
	document.getElementById("Day3").removeClass("selected");
	
	document.getElementById("Day1").addClass("notSelected");
	document.getElementById("Day2").addClass("selected");
	document.getElementById("Day3").addClass("notSelected");
	*/
	
	changeRows();
});

day3Button.addEventListener("click", function(){
	//Change day to 3, remove 'selected' class from other buttons, add 'selected' class to day 3
	//Change rows accordingly
	day = 3;
	
	/*
	document.getElementById("Day1").removeClass("selected");
	document.getElementById("Day2").removeClass("selected");
	document.getElementById("Day3").removeClass("notSelected");
	
	document.getElementById("Day1").addClass("notSelected");
	document.getElementById("Day2").addClass("notSelected");
	document.getElementById("Day3").addClass("selected");
	*/
	
	changeRows();
});

insertRows();
