let ctl = angular.module('modifyTeaherController', []);

ctl.controller('modifyTeaherController', ['$scope', '$http', function($scope, $http) {

 $http.get('/teachers').then(function(teachersResponse) {
  $scope.teachers = teachersResponse.data;
 });


 $scope.update = function() {
  $http.put('/teachers/' + $scope.teacher.id, $scope.id).
  success(function(data) {
   console.log("put successful");
  }).error(function(data) {
   console.error("error in put http request");
  });

 };
}]);
