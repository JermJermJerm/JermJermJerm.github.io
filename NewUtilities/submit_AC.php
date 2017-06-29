<?php

		/*
		$dsn = 'mysql:host=localhost;dbname=utilsdb';
        $dbu = 'root'; //replace before production
        $dbp = ''; 
        try{ 
		
            $db = new PDO($dsn, $dbu, $dbp);
        
        } catch (PDOException $err) {
        
			//Print out the error code if we can't
			$error = $err->getMessage();
			setcookie("errormessage", $error, "", "/");
        }
		*/
		
		print_r($_POST);
		print($_POST['AC4temp']);
		
		
?>