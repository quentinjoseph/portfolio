var app = angular.module('appMod',['ui.bootstrap']);
app.controller('controller2', function ($scope){
console.log('yoyoyo')
responsiveCarousel();
  function responsiveCarousel($scope){
    $scope.carouselTimer = 5000;
    $scope.slides = [
      {
        image: 'http://7818-presscdn-0-76.pagely.netdna-cdn.com/wp-content/uploads/2015/10/sports-car.jpg',
        cap: 'Caption goes here'
      },
      {
        image: 'http://7818-presscdn-0-76.pagely.netdna-cdn.com/wp-content/uploads/2015/10/sports-car.jpg',
        cap: 'Caption goes here'
      },
      {
        image: 'http://7818-presscdn-0-76.pagely.netdna-cdn.com/wp-content/uploads/2015/10/sports-car.jpg',
        cap: 'Caption goes here'
      },
      {
        image: 'http://7818-presscdn-0-76.pagely.netdna-cdn.com/wp-content/uploads/2015/10/sports-car.jpg',
        cap: 'Caption goes here'
      }
    ];
  }








});
