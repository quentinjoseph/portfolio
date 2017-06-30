var app = angular.module('appMod');
app.controller('projectsController', function ($scope){
var audio = angular.element(document.querySelector('#audio'));
var audioShow = angular.element(document.querySelector('#audioDiv'));
var website = angular.element(document.querySelector('#websites'));
var websiteShow = angular.element(document.querySelector('#websiteDiv'));
var video = angular.element(document.querySelector('#videos'));

$scope.projectSelect=function(ev){
var clickedEventClass = ev.target.className;
var clickedEventID = ev.target.id;
  if((clickedEventClass ==! 'selected')&&(clickedEventID=='videos')){
  video.addClass('selected');
  audio.removeClass('selected');
  audioShow.addClass('hide');
  website.removeClass('selected');
  websiteShow.addClass('hide');
  }
  else if((clickedEventClass ==! 'selected')&&(clickedEventID=='websites')){
  video.removeClass('selected');
  audio.removeClass('selected');
  audioShow.addClass('hide');
  website.addClass('selected');
  websiteShow.removeClass('hide');
  }
  else if((clickedEventClass ==! 'selected')&&(clickedEventID=='audio')){
  video.removeClass('selected');
  audio.addClass('selected');
  audioShow.removeClass('hide');
  website.removeClass('selected');
  websiteShow.addClass('hide');
  }
}







});
