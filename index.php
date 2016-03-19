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
		<meta name='company' content='KERNEL ULTRAS'>
		<meta name='date' content='(D.M.Y) 31.07.2011'>
		<meta name='robots' content='index,follow'>
		<meta name='description' content='KERNEL ULTRAS alias Linux Online'>
		<meta name='keywords' content='Linux,FSF,Free Software,Open Source,Android,Programing,Programovanie'>
		<script type='text/javascript' src='bin/javascript/main.js'></script>
	</head>
";

echo "
	<body>
		<p id=\"status\">STATUS</p>
		<form name=\"form\" action=\"javascript:sendText()\">
			<input type=\"text\" class=\"input\" id=\"shell\" name=\"shell\" autocomplete=\"off\">
			<input type=\"submit\" class=\"input_ok\" name=\"ok\" value=\"OK\">
		</form>\n
	</body>
</html>
";
?>
