let ctlc = angular.module("deleteHgController", ['ui.router']);

ctlc.controller('deleteHgController', ['$scope', '$http', function($scope, $http) {
 $http.get('/highschools').then(function(response) {
  $scope.highschools = response.data;
 });

 $scope.deleteHighSchool = function() {
  $http.delete('/highschools/' + $scope.highschool.highSchoolName)
   .success(function(response, status, headers, config) {})
   .error(function(response, status, headers, config) {
    $scope.error_message = response.error_message;
   });
 }
}]);
