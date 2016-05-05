var express = require('express');
var server = express();

server.use(express.static(__dirname + '/src/'));

server.get('/', function(req, res){
  res.redirect('/index.html');
});

console.log("server is listening to http://localhost:8181");
server.listen(8181);