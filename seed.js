var express = require('express'),
	app = express();

var request = require('request');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var db = require('./models');

var excerciseList = [
{
	bodyArea: "Triceps",
		name: "Cable Pushdowns",
		sets: 3,
		reps: 15,
		picture: "https://justinkavanaghfitness.com/wp-content/uploads/Triceps-Pushdown.jpg"
},
{
	bodyArea: "Biceps",
		name: "Hammer Curls",
		sets: 3,
		reps: 15,
		picture: "http://www.fitnessandpower.com/wp-content/uploads/2016/04/hammer-curls-1.jpg"
},
{
	bodyArea: "Chest",
		name: "Dumbell Chest Flys",
		sets: 4,
		reps: 16,
		picture: "http://www.2createabody.com/images/incline_dumbbell_flys.jpeg" 
},
{
	bodyArea: "Legs",
		name: "Leg Press",
		sets: 4,
		reps: 16,
		picture: "http://s-media-cache-ak0.pinimg.com/originals/d4/af/f3/d4aff3aad1da44c3ac660e61ec5b3710.jpg" 
},
{
	bodyArea: 	"Legs",
		name: 	"Lying Leg Curls",
		sets: 	4,
		reps: 	16,
		picture: "http://weighttraining.guide/wp-content/uploads/2016/10/lying-leg-curl.png"
},
{
	bodyArea: "Back",
		name: "Barbell Deadlifts",
		sets: 3,
		reps: 12,
		picture: String
},
{
	bodyArea: "Back",
		name: "Lat Pulldowns",
		sets: 4,
		reps: 16,
		picture: String
},
{
	bodyArea: "Back",
		name: "Bent Over Barbell Row",
		sets: 4,
		reps: 12,
		picture: String
},
{
	bodyArea: "Shoulders",
		name: "Over head Press",
		sets: 4,
		reps: 16,
		picture: String
},
{
	bodyArea: "Biceps",
		name: "Incline Dumbell Curls",
		sets: 4,
		reps: 12,
		picture: String
}

];

db.Excercise.remove({}, function(err, excercises){
	if(err) {
		console.log('error occurred in remove', err);
	} else {
		console.log('removed all excercises');
	}
});

db.Excercise.create(excerciseList, function(err, excercises){
	if (err) { return console.log('err', err); }
	console.log("created", excerciseList.length, "excercises");
	process.exit();
});


