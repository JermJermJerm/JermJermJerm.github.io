<html>
<head>
	<link href="UtilitiesStyles.php" type="text/css" rel="stylesheet"/>
	
	<!-- JQuery 3.1.1 https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js-->
	<?php
		echo'<script language="javascript" "type="text/javascript" src="jquery.min.js"></script>'; #but these don't ???
		#echo'<script language="javascript"  type="text/javascript" src="UtilitiesScripts.js"></script>';
		echo'<script type="text/javascript"> console.log("admin scripting");</script>'; #for some reason this loads 
	?>
	
	<!-- GSAP 
	<script src="./../greensock-js/src/minified/TweenMax.min.js"></script>
	-->
</head>

<body>

	<div id="headerDiv">
		<!--Fix later and use a local image if and when this goes live
		<image src="http://whatsdown.nyi.net/images/logo.gif" alt="NYI"> -->
	</div>

	<!--
		Use a container within the form for better appearance I guess
		lets us style the form and the rest of the page separately
	-->
	<image src="" alt="NJ1 Datacenter floorplan">
	
	<div id="formContainer">
		<form id="Utilities" method="POST" action="submit_AC.php">
			
			<ul id="AClist">
				<h2>Air Conditioners / AC Units</h2>
				<h3>AC labels: <span class="on">Green</span> means on, <span class="off">Red</span> means off</h3>
				<li class="ACli">
					<label class="AClabel on">AC-4</label>
					<input type="text" placeholder="ECON" class="ACin econ" name="AC4econ">
					<input type="text" placeholder="DX" class="ACin dx" name="AC4dx">
					<input type="text" placeholder="RH" class="ACin rh" name="AC4rh">
					<input type="text" placeholder="Temp" class="ACin temp" name="AC4temp">
				</li>
				
				<li class="ACli">
					<label class="AClabel on">AC-01</label>
					<input type="text" placeholder="ECON" class="ACin econ" name="AC01econ">
					<input type="text" placeholder="DX" class="ACin dx" name="AC01dx">
					<input type="text" placeholder="RH" class="ACin rh" name="AC01rh">
					<input type="text" placeholder="Temp" class="ACin temp" name="AC01temp">
				</li>
				
				<li class="ACli">
					<label class="AClabel on">AC-17</label>
					<input type="text" placeholder="Temp" class="ACin temp" name="AC17temp">
					<input type="text" placeholder="RH" class="ACin rh" name="AC17rh">
					<input type="text" placeholder="DX" class="ACin dx" name="AC17dx">
					<input type="text" placeholder="ECON" class="ACin econ" name="AC17econ">
				</li>
				
				<li class="ACli">
					<label class="AClabel on">AC-16</label>
					<input type="text" placeholder="Temp" class="ACin temp" name="AC16temp">
					<input type="text" placeholder="RH" class="ACin rh" name="AC16rh">
					<input type="text" placeholder="DX" class="ACin dx" name="AC16dx">
					<input type="text" placeholder="ECON" class="ACin econ" name="AC16econ">
				</li>
				
				<li class="ACli">
					<label class="AClabel on">AC-1</label>
					<input type="text" placeholder="Temp" class="ACin temp" name="AC1temp">
					<input type="text" placeholder="RH" class="ACin rh" name="AC1rh">
					<input type="text" placeholder="DX" class="ACin dx" name="AC1dx">
					<input type="text" placeholder="ECON" class="ACin econ" name="AC1econ">
				</li>
				
				<li class="ACli">
					<label class="AClabel on">AC-6</label>
					<input type="text" placeholder="Temp" class="ACin temp" name="AC6temp">
					<input type="text" placeholder="RH" class="ACin rh" name="AC6rh">
					<input type="text" placeholder="DX" class="ACin dx" name="AC6dx">
					<input type="text" placeholder="ECON" class="ACin econ" name="AC6econ">
				</li>
				
				<li class="ACli">
					<label class="AClabel on">AC-1A</label>
					<input type="text" placeholder="Temp" class="ACin temp" name="AC1Atemp">
					<input type="text" placeholder="RH" class="ACin rh" name="AC1Arh">
					<input type="text" placeholder="DX" class="ACin dx" name="AC1Adx">
					<input type="text" placeholder="ECON" class="ACin econ" name="AC1Aecon">
				</li>
				
				<li class="ACli">
					<label class="AClabel on">AC-11</label>
					<input type="text" placeholder="Temp" class="ACin temp" name="AC11temp">
					<input type="text" placeholder="RH" class="ACin rh" name="AC11rh">
					<input type="text" placeholder="DX" class="ACin dx" name="AC11dx">
					<input type="text" placeholder="ECON" class="ACin econ" name="AC11econ">	
				</li>
				
				<li class="ACli">
					<label class="AClabel on">AC-10</label>
					<input type="text" placeholder="Temp" class="ACin temp" name="AC10temp">
					<input type="text" placeholder="RH" class="ACin rh" name="AC10rh">
					<input type="text" placeholder="DX" class="ACin dx" name="AC10dx">
					<input type="text" placeholder="ECON" class="ACin econ" name="AC10econ">
				</li>
				
				<li class="ACli">
					<label class="AClabel on">AC-2</label>
					<input type="text" placeholder="Temp" class="ACin temp" name="AC2temp">
					<input type="text" placeholder="RH" class="ACin rh" name="AC2rh">
					<input type="text" placeholder="DX" class="ACin dx" name="AC2dx">
					<input type="text" placeholder="ECON" class="ACin econ" name="AC2econ">
				</li>
				
				<li class="ACli">
					<label class="AClabel on">AC-3</label>
					<input type="text" placeholder="Temp" class="ACin temp" name="AC3temp">
					<input type="text" placeholder="RH" class="ACin rh" name="AC3rh">
					<input type="text" placeholder="DX" class="ACin dx" name="AC3dx">
					<input type="text" placeholder="ECON" class="ACin econ" name="AC3econ">
				</li>
				
				<li class="ACli">
					<label class="AClabel on">AC-13</label>
					<input type="text" placeholder="Temp" class="ACin temp" name="AC13temp">
					<input type="text" placeholder="RH" class="ACin rh" name="AC13rh">
					<input type="text" placeholder="DX" class="ACin dx" name="AC13dx">
					<input type="text" placeholder="ECON" class="ACin econ" name="AC13econ">
				</li>
				
				<li class="ACli">
					<label class="AClabel on">AC-15</label>
					<input type="text" placeholder="Temp" class="ACin temp" name="AC15temp">
					<input type="text" placeholder="RH" class="ACin rh" name="AC15rh">
					<input type="text" placeholder="DX" class="ACin dx" name="AC15dx">
					<input type="text" placeholder="ECON" class="ACin econ" name="AC15econ">
				</li>
				
				<li class="ACli">
					<label class="AClabel on">AC-7</label>
					<input type="text" placeholder="Temp" class="ACin temp" name="AC7temp">
					<input type="text" placeholder="RH" class="ACin rh" name="AC7rh">
					<input type="text" placeholder="DX" class="ACin dx" name="AC7dx">
					<input type="text" placeholder="ECON" class="ACin econ" name="AC7econ">
				</li>
				
				<li class="ACli">
					<label class="AClabel on">AC-12</label>
					<input type="text" placeholder="Temp" class="ACin temp" name="AC12temp">
					<input type="text" placeholder="RH" class="ACin rh" name="AC12rh">
					<input type="text" placeholder="DX" class="ACin dx" name="AC12dx">
					<input type="text" placeholder="ECON" class="ACin econ" name="AC12econ">
				</li>
			</ul>
			
			<!--
			<ul id="PDUlist">
				<h2>PDU LIST </h2>
			</ul>
			
			<ul id="UPSlist">
				<h2>UPS LIST </h2>
			</ul>
			-->
			
			<input type="submit" value="Submit">
		</form>
	</div>
	

</body>
</html>