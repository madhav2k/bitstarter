var express = require('express');
var fs = require("fs");

var fileName = 'index.html';
var app = express.createServer(express.logger());
var dataOut = '';
fs.exists(fileName, function(exists) {
  if (exists) {
    fs.stat(fileName, function(error, stats) {
      fs.open(fileName, "r", function(error, fd) {
        var buffer = new Buffer(stats.size);
        fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
          var data = buffer.toString("utf8", 0, buffer.length);
          //console.log(dataOut);
          sendWebResponse(data);
          fs.close(fd);
        });
      });
    });
  }
});
funtion sendWebResponse(inStream){
app.get('/', function(request, response) {
  response.send(inStream); 
});      
          
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});         
}
//function logData(inStream){
//console.log(inStream);
//}
