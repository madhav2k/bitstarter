var express = require('express');
var fs = require("fs");

var fileName = 'index.html';
var dataOut = '';

var that = this;
function readFile(fileName){
//check if file exists
fs.exists(fileName, function(exists) {
  if (exists) {
    //check the size of stream
    fs.stat(fileName, function(error, stats) {
      //open the file
      fs.open(fileName, "r", function(error, fd) {
        var buffer = new Buffer(stats.size);
        fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
          var data = buffer.toString("utf8", 0, buffer.length);
          console.log(data);
          var app = express.createServer(express.logger());

          app.get('/', function(request, response) {
            response.send(data); 
          });      
          
          var port = process.env.PORT || 8080;
          app.listen(port, function() {
          console.log("Listening on " + port);
          });         
          fs.close(fd);
        });
      });
    });
  }
  else{
    console.log("Invalid file passed");
  }
});
}
readFile(fileName);
