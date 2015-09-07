define(['app/service'], function(app){

	app.factory('User', function($resource){
		return $resource('csv/:id', {
			id: '@id',
		}, {
            query: {method:'GET', params:{}, isArray:true}
		});
	});
});