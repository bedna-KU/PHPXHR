//#########################################################
// Part of project PHPXHR
//
// main.js - main javascript file
//
// Author: Mario Chorvath - Bedna
//
// Licence GNU General Public License
// Version 2
// http://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
//#########################################################

function sendText () {
	textMessage = form.elements["message"].value;
	document.getElementById("status").innerHTML += "* Send text to worker: <b>" + textMessage + "</b><br>";
	// console.log ("aaa");
	// Define worker writer
	var worker_writer = new Worker ('bin/javascript/worker_writer.js');
	// Message to JSON
	message = {"text": encodeURIComponent (textMessage)};
	// Spawn worker writer
	document.getElementById("status").innerHTML += "* Spawn worker writer<br>";
	worker_writer.postMessage (message);
	// worker_uploader.terminate ();
	// Event worker writer
	worker_writer.onmessage = function (event) {
		// Get response
		var textContent = event.data;
		// If file write successfully writed
		if (textContent == "OK") {
			document.getElementById("status").innerHTML += "* " + textContent + ", file writed<br>";
			// Define worker reader
			var worker_reader = new Worker ('bin/javascript/worker_reader.js');
			// Spawn worker reader
			document.getElementById("status").innerHTML += "* Spawn worker reader<br>";
			worker_reader.postMessage (message);
		}
		// If file don't write successfully writed
		else {
			document.getElementById("status").innerHTML += "* Permissions don't allow to write to file<br>";
		}
		// Terminate worker writer
		document.getElementById("status").innerHTML += "* Terminate worker writer<br>";
		worker_writer.terminate ();
		// Event worker reader
		worker_reader.onmessage = function (event) {
			// Get response
			var textResponse = event.data;
			document.getElementById("status").innerHTML += "* Text from file: <b>" + decodeURIComponent (textResponse) + "</b><br>";
			// Terminate worker reader
			document.getElementById("status").innerHTML += "* Terminate worker reader<br>";
			worker_writer.terminate ();
		}
	}
}
