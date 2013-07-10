//var express = require('express');
var fs = require("fs");

var fileName = 'index.html';
//var app = express.createServer(express.logger());

fs.exists(fileName, function(exists) {
  if (exists) {
    fs.stat(fileName, function(error, stats) {
      fs.open(fileName, "r", function(error, fd) {
        var buffer = new Buffer(stats.size);
        fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
          var data = buffer.toString("utf8", 0, buffer.length);
          //console.log(dataOut);
          //osendWebResponse(data);
app.get('/', function(request, response) {
  response.send(data); 
});      

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});         
          //return data;
          fs.close(fd);
        });
      });
    });
  }
});

//app.get('/', function(request, response) {
//  response.send(readFile(fileName)); 
//});      
          
//var port = process.env.PORT || 5000;
//app.listen(port, function() {
//  console.log("Listening on " + port);
//});         
//function logData(inStream){
//console.log(inStream);
//}
console.log(readFile(fileName));
