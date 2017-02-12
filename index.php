<?php
//#########################################################
// Part of project PHPXHR
//
// index.php - main file
//
// Author: Mario Chorvath - Bedna
//
// Licence GNU General Public License
// Version 2
// http://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
//#########################################################
echo "
<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv='content-type' content='text/html; charset=UTF-8'>
		<meta name='author' content='Mario Chorvath - Bedňa' >
		<meta name='date' content='(D.M.Y) 31.07.2014'>
		<meta name='robots' content='index,follow'>
		<meta name='description' content='PHP XHR AJAX'>
		<script type='text/javascript' src='bin/javascript/main.js'></script>
	</head>
";

echo "
	<body>
		<form name=\"form\" action=\"javascript:sendText()\">
			<input type=\"text\" id=\"message\" name=\"message\">
			<input type=\"submit\" name=\"ok\" value=\"OK\">
		</form>
		<p><b>STATUS:</b></p>
		<p id=\"status\"></p>
	</body>
</html>
";
?>
