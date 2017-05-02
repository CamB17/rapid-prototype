var express = require('express'),
	app = express();

var request = require('request');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var db = require('./models');

//Exercises Here
var exercises = [
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
		picture: "http://www.fitnessandpower.com/wp-content/uploads/2017/01/dumbbell-flyes.jpg" 
},
{
	bodyArea: "Legs",
		name: "Leg Press",
		sets: 4,
		reps: 16,
		picture: "https://s-media-cache-ak0.pinimg.com/736x/c0/5b/a3/c05ba3e500bba44d068d869650428d86.jpg" 
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
		picture: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRqO3H3xYA_8SOfhhvQGaQwi7hj8LX6_egkllmtk4jNffzXPqWqNQ"
},
{
	bodyArea: "Back",
		name: "Lat Pulldowns",
		sets: 4,
		reps: 16,
		picture: "http://bodybuilding-wizard.com/wp-content/uploads/2014/03/wide-grip-lat-pulldown-exercise-7-1-1.jpg"
},
{
	bodyArea: "Back",
		name: "Bent Over Barbell Row",
		sets: 4,
		reps: 12,
		picture: "http://nutribody.com/wp-content/uploads/2015/11/THICKEN-UPPER-AND-MIDDLE-BACK-ins1.jpg"
},
{
	bodyArea: "Shoulders",
		name: "Over head Press",
		sets: 4,
		reps: 16,
		picture: "https://www.bodybuildertime.com/wp-content/uploads/2016/02/barbell-shoulder-press.png"
},
{
	bodyArea: "Biceps",
		name: "Incline Dumbell Curls",
		sets: 4,
		reps: 12,
		picture: "http://www.burnthefatinnercircle.com/members/images/1592c.jpg?cb=20170321111837"
}

];

db.Exercise.remove({}, function(err, exercises){
	if(err) {
		console.log('error occurred in remove', err);
	} else {
		console.log('removed all excercises');
	}
});

	db.Exercise.create(exercises, function(err, exercises){
		if (err) { return console.log('err', err); }
		console.log("created", exercises.length, "exercises");
		process.exit();
});


