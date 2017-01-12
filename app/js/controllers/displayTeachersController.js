let cta=angular.module("displayTeachersController",['ui.router']);


cta.controller('displayTeachersController',['$scope','$http', function($scope,$http){
  
    $scope.readTeachers=function(){
        $http.get('/teachers').then(function(teachersResponse) {
            $scope.teachers = teachersResponse.data;
        });
    };
       
}]);
