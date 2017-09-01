7//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, '/')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'home.html'));
});
app.get('/aboutthepage', function(req, res){
  res.sendFile(path.join(__dirname, 'aboutthepage.html'));
});
app.get('/home', function(req, res){
  res.sendFile(path.join(__dirname, 'home2.html'));
});
app.get('/Chapter1', function(req, res){
  res.sendFile(path.join(__dirname, 'aboutthepage.html'));
});
app.get('/Chapter2', function(req, res){
  res.sendFile(path.join(__dirname, 'aboutthepage.html'));
});
app.get('/Chapter3', function(req, res){
  res.sendFile(path.join(__dirname, 'aboutthepage.html'));
});
app.get('/Chapter4', function(req, res){
  res.sendFile(path.join(__dirname, 'aboutthepage.html'));
});
app.get('/Chapter5', function(req, res){
  res.sendFile(path.join(__dirname, 'aboutthepage.html'));
});

//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});