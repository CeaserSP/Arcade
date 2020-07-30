var express = require("express");

var app = express();
var port = 3030;

// Configure server
app.configure( function() {
    //Where to serve static content
    app.use( express.static( application_root ) );
});

app.listen(port, function () {
    console.log("Server is running on "+ port +" port");
  });