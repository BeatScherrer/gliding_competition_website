const express = require('express');
const fs = require('fs');
const https = require('https');
const serveStatic = require("serve-static");
const path = require('path');
require('dotenv').config();

app = express();
const port = process.env.PORT || 5000;

const https_options = {
  key: fs.readFileSync(path.join(__dirname, 'ssl', 'www_jsm2019_ch.key')),
  cert: fs.readFileSync(path.join(__dirname, 'ssl', 'www_jsm2019_ch.crt'))
}

app.use(express.static(__dirname + '/dist/'));

https.get(/.*/, (req, res)=> {
  res.sendFile(__dirname + "/dist/index.html");
});


https.createServer(https_options, app).listen(port, function() {
  console.log(`Server is listening on port ${port}...`);
});
