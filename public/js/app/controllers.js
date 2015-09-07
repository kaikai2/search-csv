define(['angular-sanitize',
        /*'angular-ui-select',
        'angular-ui-notification',
        'angular-ui-utils',
        'angular-highlightjs',
        'angular-scroll-glue',*/
   //     'angular-querystring',
//        'md5-angular-filter',
        'ui-bootstrap-tpls',
  //      'google-code-prettify',
    //    'app/JSONedit',
        'app/service',
      //  'ng-grid'
       ], function () {
    
    return angular.module('scControllers', [
        //'ui.select',
        //'ui-notification',
        //'ui.utils',
        // 'ngGrid',
        // 'hljs',
        'ui.bootstrap',
        'ngSanitize',
        //'querystring',
        //'luegg.directives',
        'scService',
    ]);
});
