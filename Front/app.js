
var app = angular.module('FitGenerator', []);
	app.controller('excerciseController', function() {
		this.info = excercises[Math.floor(Math.random()*excercises.length)];
		this.pick = function(){
		this.info = excercises[Math.floor(Math.random()*excercises.length)];
		};
	});

var excercises = [
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
		picture: String 
},
{
	bodyArea: 	"Legs",
		name: 	"Lying Leg Curls",
		sets: 	4,
		reps: 	16,
		picture: String
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


