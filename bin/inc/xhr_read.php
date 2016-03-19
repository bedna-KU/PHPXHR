<?php
//#########################################################
// Part of project PHPXHR
//
// xhr_write.php - write text into file
//
// Author: Mario Chorvath - Bedna
//
// Licence GNU General Public License
// Version 2
// http://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
//#########################################################

$handle = fopen ("../../text.txt", "r");
$text = fgets ($handle);
fclose ($handle);
echo $text;
?>
