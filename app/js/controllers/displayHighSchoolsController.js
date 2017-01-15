let ctli = angular.module('displayHighSchoolsController', ['ui.router']);

ctli.controller('displayHighSchoolsController', ['$scope', '$http', function($scope, $http) {

    $http.get('/highschools').then(function(response) {
        $scope.highschools = response.data;
    });
    
}]);
