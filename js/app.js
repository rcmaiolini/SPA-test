angular
.module('myApp',[ 'ngResource' ])
.controller('myController',['$scope','$resource',function ($scope, $resource, $http){

  var TwitterAPI = $resource("https://strong-window-3577.herokuapp.com/twitter?q=:q&count=:count",
    { callback: "JSON_CALLBACK",
     q:"@q",
     count:"@count"},
   { get: { method: "JSONP" }});

  var FlickrAPI = $resource('https://strong-window-3577.herokuapp.com/flickr_raw?text=:q&count=:count',
   { callback: "JSON_CALLBACK",
     q:"@q",
     count:"@count"},
   { get: { method: "JSONP" }});

  $scope.searchTerm = "#DogHero";

  $scope.getPhotoUrl = function(photoObj){
    return 'https://farm' + photoObj.farm + '.staticflickr.com/' + photoObj.server + '/' + photoObj.id + '_' + photoObj.secret + '_q.jpg';
  }

  $scope.search = function() {
    $scope.twitterResult = TwitterAPI.get({q:'a',count:10 });
    $scope.flickrResult = FlickrAPI.get({q:'a',count:10 });
  };

}]);