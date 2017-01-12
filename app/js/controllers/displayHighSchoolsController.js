let ctli = angular.module('displayHighSchoolsController', ['ui.router']);

ctli.controller('displayHighSchoolsController', ['$scope','$http', function($scope,$http) {
  
  $http.get(server+'/actors')
    .then((response)=>{
        $scope.Actors=response.data;
        console.log($scope.Actors);
   })
    .catch((error)=>{
        console.warn(error);
       $scope.Actors='Server Error';
   });
       
}]);
  
  
  
    
  /*  $http.get('/highschools').then(function(highschoolsResponse) {
            $scope.highschools = highschoolsResponse.data;
        });
}]);

*/


/*let ctb=angular.module("displayHighSchoolsController",['ui.router']);


ctb.controller('displayHighSchoolsController',['$scope','$http', function($scope,$http){
  
    $scope.readHighSchools=function(){
        $http.get('/highschools').then(function(highschoolsResponse) {
            $scope.highschools = highschoolsResponse.data;
        });
    };
       
}]);
*/

/* 
ctb.controller('displayHighSchoolsController', ['$scope', '$http', '$state', function($scope, $http, $state){
    
    $http.get(server+'/highschools')
    .then((response)=>{
        $scope.HighSchools=response.data;
     
     
    })
    .catch((error)=>{
        console.warn(error);
        $scope.HighSchools='Server Error';
    });
    
    $scope.selected={};
    
    $scope.getTemplate=(highschool)=>{
        if(highschool.id==$scope.selected.id){return 'edit'}
        else{
            return 'display'
        }}

 $scope.editHighschool = (highschool) => {
            $scope.selected = angular.copy(highschool)
        }

        $scope.cancelEditing = () => {
            $scope.selected = {}
        }
    $scope.addHighSchool = (highschool) => {
        $http.post(server + '/highschools', highschool)
             .then((response) => {
               $state.go($state.current, {}, {
                    reload: true
                })
          })
           .catch((error) => console.log(error))
    }
    
    
    $scope.saveHighSchool= (highschool,id) => {
            $http.put(server + '/highschools/' + id, highschool)
            .then((response) => {
               $state.go($state.current, {}, {
                    reload: true
                })
            }).catch((error) => console.log(error))
        }
}]);*/

