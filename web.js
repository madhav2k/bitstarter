var express = require('express');

var fs = require('fs');
var app = express.createServer(express.logger());


fs.readFileSync('index.html', function (err, data) {
  if (err) throw err;
  console.log(data);
});

var buffer = new Buffer("I'm a string!", "utf-8");
app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
