
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
	reps: 15
},
{
	bodyArea: "Biceps",
	name: "Hammer Curls",
	sets: 3,
	reps: 15 
},
{
	bodyArea: "Chest",
	name: "Cable Flys",
	sets: 4,
	reps: 16 
}

];


