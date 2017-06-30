var app=angular.module('appMod', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider.when('/aboutMe', {
      templateUrl: 'views/about.html'
    }).when('/projects',{
      templateUrl: 'views/projects.html',
      controller: 'projectsController'
    }).when('/landing',{
      templateUrl:'views/landing.html'
    }).otherwise('/landing');

  });
