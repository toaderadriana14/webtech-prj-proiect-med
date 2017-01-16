let ctxa = angular.module("editHgController", ['ui.router']);



ctxa.controller('editHgController', ['$scope', '$http', function($scope, $http) {
    $scope.teachers = {};

    $http.get('/highschools').then(function(highschoolsResponse) {
        $scope.highschools = highschoolsResponse.data;
    });
    $scope.newTeacher = function() {
        $http.post('/teachers', $scope.teachers).
        success(function(data) {
            console.log("posted successfully");
        }).error(function(data) {
            console.error("error in posting");
        });
    };


}]);


/*

$http.get('/highschools').then(function(highschoolssResponse) {
    $scope.highschools = highschoolssResponse.data;
});

$scope.addNewReference = function() {
    document.getElementById("formReference").style.display = "block";
    document.getElementById("formChangeName").style.display = "none";
    document.getElementById("Id").value = $scope.teacher.highSchoolName;
}


*/