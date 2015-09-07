define(['angular-route',
        'ui-bootstrap-tpls',
        'app/controllers',
        'app/filters',
        'app/service',
        'app/directives'
       ], function () {
    console.log('define searchCsv');
    return angular.module('searchCsv', [
        'ngRoute',
        'scControllers',
        'scFilters',
        'scService',
        'scDirectives',
        'ui.bootstrap'
    ]);
});