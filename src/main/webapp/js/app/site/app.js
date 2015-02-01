define([
    'angular',
    'text!tmpl/site.html',
    'controllers',
    'angularRoute'
], function (
    ng,
    siteTmpl
    ) {

    console.log("app");

    var app = ng.module('app', [
        'ngRoute',
        'controllers'
    ]);

    app.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/site', {
                template: siteTmpl,
                controller: 'SiteCtrl'
            })
            .otherwise({
                redirectTo: '/site'
            });

    }]);

    return app;
});