<?php 
	header("Content-type: text/css"); 
?>

ul{
	display: block;
	float: left;
	width: 1303px;
	
	border: 1px black solid;
	padding-left: 0;
	
	text-align: center;
}

.ACli{ 
	list-style-type: none;
	
	display: block;
	float: left;
	
	margin: 0 auto;
	
	margin: 2.5px 5px;
	width: 250px;
}

.ACli:nth-of-type(6), .ACli:nth-of-type(11), .ACli:nth-of-type(1){
	clear: left;
}


.AClabel{
	padding-left: 15px;
	float: left;
	cursor: hand;
	cursor: pointer;
}


.ACin{
	text-align: center;
	width: 45px;
	display: block;
	float: right;
}

.on{
	color: green;
}

.off{
	color: red;
}


/*
		in each ACli, there are 4 inputs
			first ACli input, placeholder is 'temp', width 50, 
			second ACli input, placeholder is rh
			third ACli input, placeholder is DX
			last ACli input, placeholder is Econ
	*/