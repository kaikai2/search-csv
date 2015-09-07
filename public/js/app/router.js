define(['app/search-csv',
        'angular-route',
        'controller/main',
	], function (app) {
	
	app.config(function($routeProvider, $locationProvider) {
        /*
       $routeProvider.when('/index.html', {
            templateUrl: '/cover.html', 
            controller: 'CoverCtrl'
        }).otherwise({
            redirectTo: '/index.html'
        });*/
		// configure html5 to get links working on jsfiddle
		$locationProvider.html5Mode(true);
	});
    
});