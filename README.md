# PHPXHR

### About
Write/Read file over PHP <=> Javascript Webworkers

### Dependency
none

### Structure

<pre>
  ╔=========╗---►╔==========╗---►╔================╗---►╔=============╗
  ║index.php║    ║sendText()║    ║worker_writer.js║    ║xhr_write.php║-------┐
  ╚=========╝    ╚==========╝◄---╚================╝◄---╚=============╝       ▼
                 |          ▲                                            ╔========╗
                 |          |                                            ║text.txt║
                 ▼          |                                            ╚========╝
                 ╔================╗---►╔============╗                        |
                 ║worker_reader.js║    ║xhr_read.php║◄-----------------------┘
                 ╚================╝◄---╚============╝
</pre>

### Description
Form from index.php call function sendText() in main.js

sendText() spawn worker_writer.js and that call xhr_write.php to write text into file text.txt

If file write successfully, xhr_write.php send back OK to worker_writer.js and this send OK into sendText()

If function sendText() receive OK, spawn worker_reader.js and this call xhr_read.php for read text.txt

Readed text is sended from xhr_read.php into worker_reader.js and this sended into sendText()

### Licence
[GNU GPLv2](http://www.gnu.org/licenses/gpl-2.0.html)
