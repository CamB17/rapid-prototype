
var app = angular.module('FitGenerator', ['ngRoute'])
	.controller('ExercisesController', ExercisesController);
	ExercisesController.$inject = ['$http', '$scope'];
		console.log("controller working?");
	function ExercisesController($http, $scope){
		var self = this;
		self.all = [];
		self.getExercises = getExercises;
		self.addExercise  = addExercise;

		getExercises();
	
	function addExercise(){
		$http
			.post('http://localhost:3000/exercises/', self.newExercise)
			.then(function(response){
				getExercises();
			});
		self.newExercise = {};
	}


		function getExercises(){
		$http
			.get("http://localhost:3000/exercises/")
			.then(function(response) {
				console.log(response.data);
				self.all = response.data;
			});
	}

}
	// function that runs through all exercise objects and on html button click shuffles through them
	app.controller('ExercisesController', function() {
		this.info = exercises[Math.floor(Math.random()*exercises.length)];
		this.pick = function(){
			this.info = exercises[Math.floor(Math.random()*exercises.length)];
		};
	});


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
		picture: "http://www.2createabody.com/images/incline_dumbbell_flys.jpeg" 
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

