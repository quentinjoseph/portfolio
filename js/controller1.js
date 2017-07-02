var app = angular.module('appMod');

app.controller('controller1', function ($scope, $location){
var nameDiv= angular.element(document.querySelector('#nlD'));
var aboutDiv= angular.element(document.querySelector('#alD'));
var projectDiv= angular.element(document.querySelector('#plD'));




$scope.nameClick = function(){
  console.log('hi');
  nameDiv.addClass('nameLinesDiv');
  nameDiv.removeClass('nameLinesDivLeave');
  aboutDiv.addClass('aboutLinesDivLeave');
  aboutDiv.removeClass('aboutLinesDiv');
  projectDiv.addClass('projectLinesDivLeave');
  projectDiv.removeClass('projectLinesDiv');
}

$scope.aboutClick =function(){
  console.log('bye');
  aboutDiv.removeClass('aboutLinesDivLeave');
  aboutDiv.addClass('aboutLinesDiv');
  projectDiv.addClass('projectLinesDivLeave');
  projectDiv.removeClass('projectLinesDiv');
  nameDiv.addClass('nameLinesDivLeave');
  nameDiv.removeClass('nameLinesDiv');
}

$scope.projectClick = function(){
  console.log('whelp');
  projectDiv.removeClass('projectLinesDivLeave');
  projectDiv.addClass('projectLinesDiv');
  aboutDiv.addClass('aboutLinesDivLeave');
  aboutDiv.removeClass('aboutLinesDiv');
  nameDiv.addClass('nameLinesDivLeave');
  nameDiv.removeClass('nameLinesDiv');
}

// check url for correct animation
var theURLis = $location.path();
$scope.checkURL = function(){

  if(theURLis == '/landing'){
    document.getElementById('mobNav').style.color='white';
  }else if(theURLis == '/aboutMe'){
    document.getElementById('mobNav').style.color='black';
  }else if(theURLis == '/projects'){
    document.getElementById('mobNav').style.color='black';
  }
}
$scope.checkURL();



// mobile slide nav
$scope.openNav=function() {

    document.getElementById("mySidenav").style.width = "100%";
}

$scope.closeNav=function() {
    document.getElementById("mySidenav").style.width = "0";
}



});
