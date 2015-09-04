
(function(app) {


	app.config(['$routeProvider', function($routeProvider) {

		  $routeProvider.when('/home', {
		    templateUrl: 'app/modules/home/home.html',
		    controller: 'HomeController'
		  });

		  $routeProvider.otherwise('/home');

	}]);

}(angular.module('Tradency')));