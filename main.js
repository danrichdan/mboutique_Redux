var app = angular.module("routeApp", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
        .when('/home',{
            templateUrl: 'home.html',
            controller: 'mainController'
        })
        .when('/our-macarons',{
            templateUrl: 'our-macarons.html',
            controller: 'macaronsController'
        })
        .when('/gifts-parties',{
            templateUrl: 'gifts-parties.html',
            controller: 'giftsController'
        })
        .when('/contact',{
            templateUrl: 'contact.html',
            controller: 'contactController'
        })
        .otherwise({
            redirectTo: '/home'

        });

});

app.controller('mainController', function($scope){



}).controller('macaronsController', function($scope){



}).controller('giftsController', function($scope){



}).controller('contactController', function($scope){



});