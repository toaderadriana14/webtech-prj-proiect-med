let ctrl = angular.module("newHighSchoolController", ['ui.router']);

ctrl.controller('newHighSchoolController', ['$scope', '$http', function($scope, $http) {
    $scope.highschools = {};
    $scope.addANewHighSchool = function() {
        $http.post('/highschools', $scope.highschools).
        success(function(data) {
            console.log("This highschoool was successfully inserted into the DB!");
        }).error(function(data) {
            console.error("Oops! This highschoool wasn`t successfully inserted into the DB!");
        })
    }
}]);
