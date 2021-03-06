var express 	= require('express');
var app    		= express();
var bodyParser 	= require('body-parser');
var mongoose 	= require('mongoose');


var port = process.env.PORT || 3000;

var db = require('./models');

///////////////////
//	Public views //
//////////////////


app.use(express.static(__dirname + '/front/'));

app.get('/', function index(req, res){
	db.Exercise.find(__dirname + '/front/index.html');
});

app.get('/exercises', function show(req, res){
	db.Exercise.find({}, function(err, exercises){
		res.json(exercises);
	});
});

app.get('/exercises/:id', function show(req, res){
	db.Exercise.findById({id: req.params.id}, function(err, exercise){
		res.json(exercise);
	});
});

app.listen(port, function() {
	console.log('Server started on', port);
});