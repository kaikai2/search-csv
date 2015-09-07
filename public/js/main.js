requirejs.config({
	baseUrl: 'js',
	paths: {
		'angular': '/bower_components/angular/angular',
		'angular-route': '/bower_components/angular-route/angular-route.min',
		'angular-resource': '/bower_components/angular-resource/angular-resource',
        'angular-sanitize': '/bower_components/angular-sanitize/angular-sanitize.min',
		'jquery': '/bower_components/jquery/dist/jquery.min',
		'jquery-ui': '/bower_components/jquery-ui/jquery-ui.min',
		'undersocre': '/bower_components/underscore/underscore-min',
                              
		'ui-bootstrap-tpls': '/bower_components/angular-bootstrap/ui-bootstrap-tpls.min',//'/bower_components/angular-ui-bootstrap/ui-bootstrap-tpls.min',
		'bootstrap': '/bower_components/bootstrap/dist/js/bootstrap.min',
/*        'angular-querystring': '/bower_components/angular-querystring/angular-querystring',
        'angular-highlightjs': '/bower_components/angular-highlightjs/angular-highlightjs.min',
		'angular-ui-select': '/bower_components/angular-ui-select/dist/select.min',
        'angular-ui-notification': '/bower_components/angular-ui-notification/dist/angular-ui-notification.min',
		'angular-ui-sortable': '/bower_components/angular-ui-sortable/sortable.min',
        'angular-ui-utils': '/bower_components/angular-ui-utils/ui-utils.min',
        'angular-scroll-glue': '/bower_components/angular-scroll-glue/src/scrollglue',
        'md5-angular-filter': '/bower_components/md5-angular-filter/js/md5.filter',
        'ng-grid': '/bower_components/ng-grid/build/ng-grid.min',
		//'sortable': '/bower_components/sortable/js/sortable.min',
        'google-code-prettify': '/bower_components/google-code-prettify/bin/prettify.min',
        'highlightjs': '/bower_components/highlightjs/highlight.pack',
        //'v8-promise': '/bower_components/v8-promise/v8-promise'
        */
	},/*
	map: {
		'*': {
		},
	},*/
	shim: {
		'jquery': {
			exports: '$',
		},
        'v8-promise': {
            exports: 'Promise',
        },
		'jquery-ui': ['jquery'],
		'undersocre': {
			exports: '_',
		},
		'angular': {
            deps: ['jquery'],
			exports: 'angular',
		},
        //'sortable': ['jquery'],
        'bootstrap': ['jquery'],
		'angular-resource': ['angular'],
        'angular-sanitize': ['angular'],
        //'angular-querystring': ['angular'],
		'angular-route': ['angular'],
        //'angular-highlightjs': ['angular', 'highlightjs'],
		//'angular-ui-select': ['angular', 'angular-sanitize'],
        //'angular-ui-notification': ['angular'],
        //'angular-ui-sortable': ['jquery','angular', 'jquery-ui'],
        //'md5-angular-filter': ['angular'],
		'ui-bootstrap-tpls': ['angular'/*, 'bootstrap'*/],
        //'angular-ui-utils': ['angular'],
        //'angular-scroll-glue': ['angular'],
        //'ng-grid': ['angular', 'jquery'],
	},
});

//requirejs([]);
//window.name = 'NG_DEFER_BOOTSTRAP!';
define(['angular', 'undersocre', 'app/search-csv', 'app/router'], function(angular, _, app){
	angular.bootstrap(document, ["searchCsv"]);
    //angular.resumeBootstrap();
});