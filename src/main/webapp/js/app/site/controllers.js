define([
    'angular'
], function (ng) {
    var controllers = ng.module('controllers', []);

    controllers.controller('SiteCtrl', ['$scope',
        function ($scope) {
            console.log('s');
            $scope.test = "test";
        }]);
    return controllers;
});