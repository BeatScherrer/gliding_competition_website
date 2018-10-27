const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
app = express();

app.get(/.*/, (req, res)=> {
  res.sendFile(__dirname + "/index.html");
});

const port = process.env.PORT || 8080;
app.listen(port);
