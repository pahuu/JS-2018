
//List used modules
var app = angular.module('myApp', [
    'ngRoute',
    'myApp.controllers'
]);

//// ROUTES
app.config(['$routeProvider', '$logProvider', function ($routeProvider, $logProvider) {
    $logProvider.debugEnabled(true);
    let urlBase = 'partials/';  //sdasdasdasd

    $routeProvider.when('/', {
        templateUrl: urlBase + 'firstView.html',
        controller: 'firstCtrl'
    }).when('/firstView', {
        templateUrl: urlBase + 'firstView.html',
        controller: 'firstCtrl'
    }).when('/secondView', {
        templateUrl: urlBase + 'secondView.html',
        controller: 'secondCtrl'
    }).when('/thirdView', {
        templateUrl: urlBase + 'thirdView.html',
        controller: 'thirdCtrl'
    }).when('/fourthView', {
        templateUrl: urlBase + 'fourthView.html',
        controller: 'fourthCtrl'
    }).when('/dochody', {
        templateUrl: urlBase + 'dochodyView.html',
        controller: 'dochodyCtrl'
    }).when('/teacher', {
        templateUrl: urlBase + 'teacherView.html',
        controller: 'teacherCtrl'
    })
        .when('/zamowView', {
            templateUrl: urlBase + 'zamowView.html',
            controller: 'zamowCtrl'
        });
}]);

//// COMMON DEFINITIONS
app.run(function ($rootScope, $window, $http, $location, $timeout, $interval) {
    console.log('Loading global function `run`');

    $rootScope.R = {};

    //Global properties


});