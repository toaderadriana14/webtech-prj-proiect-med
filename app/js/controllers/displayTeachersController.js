let cta = angular.module("displayTeachersController", ['ui.router']);


cta.controller('displayTeachersController', ['$scope', '$http', function($scope, $http) {

 $http.get('/highschools').then(function(response) {
  $scope.highschools = response.data;
 });
 
 $scope.readTeachers = function() {
  $http.get('/teachers/' + $scope.teacher.highSchoolName).then(function(response) {
   $scope.teachers = response.data;
  });

  document.getElementById("tableId").style.display = "block";
 };
 
}]);



/* 
 */

/* 
    $http.get('/teachers').then(function(response) {
   $scope.teachers = response.data;
  });
 }]);

 mainApp.controller('viewReferenceController', ['$scope', '$http', function($scope, $http) {
*/
