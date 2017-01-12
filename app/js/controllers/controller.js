let ct = angular.module('controller', ['ui.router']);

ct.controller('controller', ['$scope', '$http', '$stateParams', '$state', function($scope, $http, $stateParams, $state) {
    let $constructor = () => {
        $http.get(server + '/Links' + '/' + $stateParams.id + '/Recipes')
            .then((response) => {
                $scope.links = response.data;
                console.log($scope.links);
            })
            .catch((error) => {
                console.warn(error);
                $scope.ingredients = "Server error";
            });
            
            $scope.getRecipes();
            
            $http.get(server +'/ingredients/'+ $stateParams.id)
            .then((response)=>{
                $scope.Ingredient=response.data;
            })
            .catch((error) => {
                console.warn(error);
            });
    }

    $scope.getHighSchools = () => {
        $http.get(server +'/HighSchools').then((res) => {
            $scope.highschools = res.data;
        });
    };
   
    $scope.addHighSchool= (highschool) => {
        $http.post(server + '/Links' + '/' + $stateParams.id + '/Highschools', highschool)
          .then((response) => {
            $state.go($state.current, {}, {
              reload: true
            });
          })
          .catch((error) => console.log(error));
      };
    
    //ce afisam
    $scope.selected = {};
    
    //afisare/editare
    $scope.getTemplate = (link) => {
        if (link.id === $scope.selected.id) {
            return 'edit';
        }
        else {
            return 'display';
        }
    };
    
    
    $scope.editTeacher = (teacher) => {
        $scope.selected = angular.copy(teacher)
    };
    
    $scope.cancelEditing = () => {
        $scope.selected = {};
    };

    //salvare modificari 
     $scope.saveTeacher = (link) => {
        $http.put(server + '/Teachers' + '/' + $stateParams.id + '/HighSchools', link)
            .then((response) => {
                $state.go($state.current, {}, {
                    reload: true
                });
            }).catch((error) => console.log(error));
    };


  
    $scope.deleteTeacher = (link) => {
        $http.delete(server + '/links/' + link.id)
          .then((response) => {
            $state.go($state.current, {}, {
              reload: true
            });
          })
          .catch((error) => console.log(error));
      };
    
    $constructor();
}]);
