
var app = angular.module("Controllers", ['ui.router']);



app.controller("newTeacherController", function($scope, $http, $state) {
	$scope.newTeacher = function(teacher) {
		$http.post("/new_shop", teacher)
			.success(function() {
				console.log("The teacher was inserted into the DB!");
				$state.go($state.current, {}, {
					reload: true
				});
			})
			.error(function() {
				console.log("The teacher couldn`t be inserted into the DB!!");
			});
	};
});

app.controller("displayTeachersController", function($scope, $http, $state) {
	$http.get("/teachers")
		.success(function(data) {
			$scope.status = "The theachers were displayed!";
			$scope.students = data;
		}).error(function(data, status) {
			$scope.status = "There was a problem in displaying teachers!";
		});
});

app.controller("newHighSchoolController", function($scope, $http, $state) {
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
});

app.controller("displayHighSchoolsController", function($scope, $http, $state) {
	$http.get("/highschools")
		.success(function(data) {
			$scope.status = "The highschools were displayed!";
			$scope.camins = data;
		}).error(function(data, status) {
			$scope.status = "There was a problem in displaying teachers!";
		});
});

app.controller("teacherFullNameController", function($scope, $http, $state) {
	$http.get("/teachers/:teacherFullName")
		.success(function(data) {
			$scope.status = "The teacher is displayed!";
			$scope.student = data;
		}).error(function(data, status) {
			$scope.status = "The teacher is displayed!";
		});
});

app.controller("highSchoolNameController", function($scope, $http, $state) {
	$http.get("/highschools/:highSchoolName")
		.success(function(data) {
			$scope.status = "The highschool is displayed!";
			$scope.camin = data;
		}).error(function(data, status) {
			$scope.status = "The teacher couldn`t be displayed!";
		});
});



/*let ct2 = angular.module("ProduseController", ['ui.router']);


ct2.controller('ProduseController', ['$scope', '$http','$state', function($scope, $http,$state) {

    $http.get(server + '/products')
        .then((response) => {
            $scope.Produse = response.data;
           // console.log($scope.Produse);
        })
        .catch((error) => {
            console.warn(error);
            $scope.Produse = 'Server Error';
        });
        
        $scope.selected = {};
        
         $scope.getTemplate = (produs) => {
        if (produs.id === $scope.selected.id) {
            return 'edit'
        }
        else {
            return 'display'
        }
        }
        
        $scope.editProdus = (produs) => {
            $scope.selected = angular.copy(produs)
        }

        $scope.cancelEditing = () => {
            $scope.selected = {}
        }


         $scope.saveProdus = (produs,id) => {
            $http.put(server + '/products/' + id, produs)
            .then((response) => {
                $state.go($state.current, {}, {
                    reload: true
                })
            }).catch((error) => console.log(error))
        }
}]);
*/