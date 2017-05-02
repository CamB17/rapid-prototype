var express 	= require('express');
var app    		= express();
var bodyParser 	= require('body-parser');
var mongoose = require('mongoose');

var port = process.env.PORT || 3000;

var db = require('./models');

///////////////////
//	Public views //
//////////////////
app.use(express.static(__dirname + '/front/'));

app.get('/', function index(req, res){
	db.Excercise.find(__dirname + '/front/index.html');
});

app.get('/excercises', function show(req, res){
	db.Excercise.find({}, function(err, excercises){
		res.json(excercises);
	});
});

app.get('/excercises/:id', function show(req, res){
	db.Excercise.findById({id: req.params.id}, function(err, excercise){
		res.json(excercise);
	});
});

app.listen(port, function() {
	console.log('Server started on', port);
});