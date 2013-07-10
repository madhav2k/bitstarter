var express = require('express');
var fs = require("fs");

var fileName = 'index.html';
var app = express.createServer(express.logger());

function readFile(whichFile){
fs.exists(whichFile, function(exists) {
  if (exists) {
    fs.stat(whichFile, function(error, stats) {
      fs.open(whichFile, "r", function(error, fd) {
        var buffer = new Buffer(stats.size);
        fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
          var data = buffer.toString("utf8", 0, buffer.length);
          //console.log(dataOut);
          //osendWebResponse(data);
          return data;
          fs.close(fd);
        });
      });
    });
  }
});
}

app.get('/', function(request, response) {
  response.send(readFile(fileName)); 
});      
          
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});         
//function logData(inStream){
//console.log(inStream);
//}
