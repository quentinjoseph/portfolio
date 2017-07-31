var app = angular.module('appMod');
app.controller('projectsController', function ($scope){
var audio = angular.element(document.querySelector('#audio'));
var audioShow = angular.element(document.querySelector('#audioDiv'));
var website = angular.element(document.querySelector('#websites'));
var websiteShow = angular.element(document.querySelector('#websiteDiv'));
var video = angular.element(document.querySelector('#videos'));
var videoShow = angular.element(document.querySelector('#videoDiv'));

$scope.projectSelect=function(ev){
var clickedEventClass = ev.target.className;
var clickedEventID = ev.target.id;
  if((clickedEventClass ==! 'selected')&&(clickedEventID=='videos')){
  video.addClass('selected');
  videoShow.removeClass('hide');
  audio.removeClass('selected');
  audioShow.addClass('hide');
  website.removeClass('selected');
  websiteShow.addClass('hide');
  }
  else if((clickedEventClass ==! 'selected')&&(clickedEventID=='websites')){
  video.removeClass('selected');
  videoShow.addClass('hide');
  audio.removeClass('selected');
  audioShow.addClass('hide');
  website.addClass('selected');
  websiteShow.removeClass('hide');
  }
  else if((clickedEventClass ==! 'selected')&&(clickedEventID=='audio')){
  video.removeClass('selected');
  videoShow.addClass('hide');
  audio.addClass('selected');
  audioShow.removeClass('hide');
  website.removeClass('selected');
  websiteShow.addClass('hide');
  }
}
$scope.vids=[
  {vid:'https://www.youtube.com/watch?v=YAPQZnO5ITc', spacer:" ", name: 'Magical', thumb:'../img/thumbsAndIcons/magical.jpg'},
  {vid:'https://www.youtube.com/watch?v=UUOnL_LekCI', spacer:" ", name: 'Dancing Machine (QRemix)', thumb:'../img/thumbsAndIcons/dancing.jpg'},
  {vid:'https://www.youtube.com/watch?v=zE0W05U6mRk', spacer:" ", name: 'Nugget', thumb:'../img/thumbsAndIcons/nugget.jpg'},
  {vid:'https://www.youtube.com/watch?v=kvX1T_V8uNg', spacer:" ", name: 'Push The Button', thumb:'../img/thumbsAndIcons/push.jpg'},
  {vid:'https://www.youtube.com/watch?v=A9Apax5sCjY', spacer:" ", name: 'Fun', thumb:'../img/thumbsAndIcons/fun.jpg'},
  {vid:'https://www.youtube.com/watch?v=tRomjbC0GvY', spacer:" ", name: 'Flashing Lights', thumb:'../img/thumbsAndIcons/flashing.jpg'}
]

// scroll buttons
$scope.scrolly=true;
var indexCount = 0;
$scope.moveVideo=function(){

if((indexCount<(($scope.vids.length)-2))&&(indexCount>=0)){
indexCount=indexCount+1;
document.getElementById('marker'+indexCount).scrollIntoView({behavior: "smooth"});
// document.getElementById('scrollLimit').scrollIntoView({behavior: "smooth"});
console.log('up'+indexCount)
}else {
  indexCount=0;

  document.getElementById('marker'+indexCount).scrollIntoView({behavior: "smooth"});
  // document.getElementById('scrollLimit').scrollIntoView({behavior: "smooth"});

  console.log('backdown'+indexCount)
}

}

$scope.moveVideoRev=function(){

if((indexCount<=(($scope.vids.length)-2))&&(indexCount>0)){
indexCount=indexCount-1;

document.getElementById('marker'+indexCount).scrollIntoView({behavior: "smooth"});
// document.getElementById('scrollLimit').scrollIntoView({behavior: "smooth"});
console.log('down'+indexCount)
}else {
  indexCount=(($scope.vids.length)-2);

  document.getElementById('marker'+indexCount).scrollIntoView({behavior: "smooth"});
  // document.getElementById('scrollLimit').scrollIntoView({behavior: "smooth"});

  console.log('backdownRev'+indexCount)
}

}
// show website details variables
var nikDetails = angular.element(document.querySelector('#nikkisiteDetails'));
var qDetails = angular.element(document.querySelector('#quentinsiteDetails'));
var hypeDetails = angular.element(document.querySelector('#quentinhypeDetails'));
var psdDetails = angular.element(document.querySelector('#quentinpsdDetails'));
var wikiDetails = angular.element(document.querySelector('#quentinWikiDetails'));
var nik = angular.element(document.querySelector('#nikkisite'));
var q = angular.element(document.querySelector('#quentinsite'));
var hype = angular.element(document.querySelector('#quentinhype'));
var psd = angular.element(document.querySelector('#quentinpsd'));
var wiki = angular.element(document.querySelector('#quentinWiki'));
$scope.detailsArr=[nikDetails, qDetails,hypeDetails,psdDetails,wikiDetails];
$scope.selectArr=[nik, q,hype,psd, wiki];
$scope.turnOff=[];
$scope.detailsShowing=false;

// show website details function
$scope.showDetails=function(data){
var target = angular.element(document.querySelector('#'+data.target.id+'Details'));
var target2 = angular.element(document.querySelector('#'+data.target.id));
  if($scope.detailsShowing===false){
    target.removeClass('hide');
    target2.addClass('selectedSite');
    $scope.detailsShowing=true;
      for(i=0; i<$scope.detailsArr.length; i++){
        if(target[0].id!==$scope.detailsArr[i][0].id){
          $scope.turnOff.push($scope.detailsArr[i]);
        }
      }
      for(i=0;i<$scope.turnOff.length; i++){
        $scope.turnOff[i].addClass('hide');
        $scope.turnOff[i].removeClass('selectedSite');
      }
  }else if($scope.detailsShowing===true){
      for(i=0; i<$scope.detailsArr.length;i++){
        if($scope.detailsArr[i].hasClass('hide')){

        }else {
          $scope.detailsArr[i].addClass('hide');
          // console.log(target[0].id)
          target.removeClass('hide');
          for(i=0; i<$scope.selectArr.length;i++){
          $scope.selectArr[i].removeClass('selectedSite');
          }
          target2.addClass('selectedSite');

        }
      }

  }
}
 $scope.hideDetails=function(data){
   var details = angular.element(document.querySelector('#'+data.target.id+'Details'));
       details.addClass('hide');

 }

});
