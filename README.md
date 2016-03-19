# PHPXHR

### About
Read/Write file over PHP <=> Javascript Webworkers

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
