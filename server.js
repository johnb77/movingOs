var express = require('express');
var path = require('path');
var app = express();

app.get('/', function(req, res){
    res.sendfile('index.html');
});
app.get('/js/app.js', function(req, res){
    res.sendfile('js/app.js');
});
app.get('/css/app.css', function(req, res){
    res.sendfile('css/app.css');
});
app.get('/favicon.ico', function(req, res){
    res.sendfile('favicon.ico');
});

var port = Number(process.env.PORT || 5000);
var server = app.listen(port, function() {
    console.log("Listening on " + port);
});
