var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, "js")));
app.get('/hello', function(req, res){
    res.send('Hello World');
});
app.get('/', function(req, res){
    res.sendfile('index.html');
});
app.get('/js/app.js', function(req, res){
    res.sendfile('js/app.js');
});
app.get('/favicon.ico', function(req, res){
    res.sendfile('favicon.ico');
});

var server = app.listen(3000, function() {
      console.log('Listening on port %d', server.address().port);
});
