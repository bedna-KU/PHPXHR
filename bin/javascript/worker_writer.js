//#########################################################
// Part of project PHPXHR
//
// worker_writer.js - worker to write text into file
//
// Author: Mario Chorvath - Bedna
//
// Licence GNU General Public License
// Version 2
// http://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
//#########################################################
// Write data on server
onmessage = function (event) {
	// New XHR2 request
	var xhr = new XMLHttpRequest(); // New XHR2
	var text = event.data["text"]; // Text from XHR

	// Post data to server
	xhr.open ("post", "../inc/xhr_write.php", false); // Sync open file
	xhr.responseType = 'text';
	xhr.setRequestHeader ("Content-Type", "application/octet-stream");
	xhr.setRequestHeader ("X-TEXT", text); // Custom header - file name
	xhr.send (); // Send
	postMessage (xhr.responseText); // Return answer
};
