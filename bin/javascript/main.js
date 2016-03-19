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
	// console.log ("aaa");
	// Spawn worker writer
	var worker_writer = new Worker ('bin/javascript/worker_writer.js');
	// Message to JSON
	message = {"text": "Hello Word"};
	// Run worker writer
	worker_writer.postMessage (message);
	// worker_uploader.terminate ();
	// document.getElementById("status").innerHTML="-------";
	// Event worker
	worker_writer.onmessage = function (event) {
		// Get response
		var textContent = event.data;
		// console.log (textContent);
		document.getElementById("status").innerHTML=textContent;
		// Terminate worker
		worker_writer.terminate ();
	}
}
