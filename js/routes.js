var app=angular.module('appMod', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider.when('/aboutMe', {
      templateUrl: 'views/about.html',
      controller: 'controller1'
    }).when('/projects',{
      templateUrl: 'views/projects.html',
      controller: 'projectsController'
    }).when('/landing',{
      templateUrl:'views/landing.html',
      controller:'controller1'
    }).when('/contact',{
      templateUrl:'views/contact.html',
      controller:'controller1'
    }).otherwise('/landing');

  });
