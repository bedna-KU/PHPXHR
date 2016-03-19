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

$text = rawurldecode ($_SERVER['HTTP_X_TEXT']); // Text

// Name must be set
if (!isset ($text)) {
  echo 'ERROR: Name required';
}

$handle = fopen ("../../text.txt", "w");
fwrite ($handle, $text."\n");
fclose ($handle);
echo "OK";
?>
