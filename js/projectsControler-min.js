var app=angular.module("appMod");app.controller("projectsController",function(e){var s=angular.element(document.querySelector("#audio")),a=angular.element(document.querySelector("#audioDiv")),l=angular.element(document.querySelector("#websites")),d=angular.element(document.querySelector("#websiteDiv")),t=angular.element(document.querySelector("#videos"));e.projectSelect=function(e){var r=e.target.className,o=e.target.id;0==r&&"videos"==o?(t.addClass("selected"),s.removeClass("selected"),a.addClass("hide"),l.removeClass("selected"),d.addClass("hide")):0==r&&"websites"==o?(t.removeClass("selected"),s.removeClass("selected"),a.addClass("hide"),l.addClass("selected"),d.removeClass("hide")):0==r&&"audio"==o&&(t.removeClass("selected"),s.addClass("selected"),a.removeClass("hide"),l.removeClass("selected"),d.addClass("hide"))}});