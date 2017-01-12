let ctrl = angular.module("newHighSchoolController", ['ui.router']);


/*ctc.controller("newHighSchoolController", function($scope, $http, $state) {
	$scope.newHighSchool = function(highschool) {
		$http.post("/new_highschool", highschool)
			.success(function() {
				console.log("Hischool was inserted into the DB!");
				$state.go($state.current, {}, {
					reload: true
				});
			})
			.error(function() {
				console.log("Hischool couldn`t be inserted into the DB");
			});
	};
});*/

ctrl.controller('newHighSchoolController', ['$scope','$http', function($scope,$http) {
    
    
    $scope.submitRecord=function(){
        $http.post('/highschools',$scope.highschool).
        success(function(data) {
            console.log("posted successfully");
        }).error(function(data) {
            console.error("error in posting");
        })
        ;
        $scope.highschool="";
    };
}]);