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
			.post('http://localhost:3000/exercises', self.newExercise)
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


	//////////
	//Routes //
	//////////

	app.config(function($routeProvider, $locationProvider){
		$routeProvider
			.when('/', {
				templateUrl: '/templates/excercisesIndex.html',
				controller: 'ExcercisesController'
			})
			.when('/excercises/:id', {
				templateUrl: '/templates/excercisesShow.html',
				controller: 'ExcercisesShowController'
			});

				$locationProvider.html5Model({
					enabled: true,
					requireBase: false
				});
	});

	/////////////
	//Controllers//
	/////////////

	}
