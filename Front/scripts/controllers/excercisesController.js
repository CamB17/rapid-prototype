var app = angular.module('FitGenerator', ['ngRoute'])
	.controller('ExcerciseController', ExcerciseController);
	
	app.controller('excercisesController', function() {
		this.info = excercises[Math.floor(Math.random()*excercises.length)];
		this.pick = function(){
		this.info = excercises[Math.floor(Math.random()*excercises.length)];
		};
	});

	////////////
	// Routes //
	////////////

	// app.config(function($routeProvider, $locationProvider){
	// 	$routeProvider
	// 		.when('/', {
	// 			templateUrl: '/templates/excercisesIndex.html',
	// 			controller: 'ExcercisesController'
	// 		})
	// 		.when('/excercises/:id', {
	// 			templateUrl: '/templates/excercisesShow.html',
	// 			controller: 'ExcercisesShowController'
	// 		});

	// 			$locationProvider.html5Model({
	// 				enabled: true,
	// 				requireBase: false
	// 			});
	// });

	///////////////
	//Controllers//
	///////////////
	ExcerciseController.$inject = ['$scope', '$http'];
	function ExcerciseController($scope, $http){
		var self = this;
		self.all = [];
		self.getExcercises = getExcercises;

		getExcercises();

		function getExcercises(){
		$http
			.get("http://localhost:3000/excercises/")
			.then(function(response) {
				console.lof(response.data);
				self.all = response.data;
			});
	}
}