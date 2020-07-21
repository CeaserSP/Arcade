var express = require("express");

var app = express();
var port = 3030;

app.listen(port, function () {
    console.log("Server is running on "+ port +" port");
  });