let ctd = angular.module("newTeacherController", ['ui.router']);





ctd.controller('newTeacherControllerr', ['$scope','$http', function($scope,$http) {
    $scope.teachers = {};
    $scope.newTeacher=function(){
        $http.post('/teachers',$scope.ingredients).
        success(function(data) {
            console.log("The teacher was successfully inserted into the DB!");
        }).error(function(data) {
            console.error("The teacher couldn`t be inserted into the DB!!");
        });
    };
}]);