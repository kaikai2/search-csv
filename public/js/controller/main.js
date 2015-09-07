define(['app/search-csv', 'bootstrap', 'service/user'], function(app){

    console.log('define MainCtrl');
	app.controller('MainCtrl', function($scope, $route, $filter, $http, $modal, $location, User) {
        // data need to keep during tab change
        $scope.title = '';
        
        $scope.curUser = null;
        $scope.ready = true;
        
        $scope.query = function(id) {
            if (id){
                $scope.curUser = null;
                $scope.ready = false;
                var user = User.get({id: id}, function(){
                    $scope.curUser = user;
                    $scope.ready = true;
                });
            }
        };
    });
    
});