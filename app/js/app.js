
let app =angular.module("Tutoring",['ui.router','displayHighSchoolsController', 'displayTeachersController', 'newHighSchoolController', 'newTeacherController']);


app.config(["$stateProvider", '$urlRouterProvider', ($stateProvider,$urlRouterProvider) => {
    
    $urlRouterProvider.otherwise("/about");
    
     $stateProvider
        .state("about", {
            url: "/about",
            templateUrl: "views/about.html",
            
        });
        
        
        
        //let`s display highschools

    $stateProvider
        .state("display_highschools", {
            url: "/display_highschools",
            templateUrl: "views/display_highschools.html",
            controller: "displayHighSchoolsController"
        });


//let`s display teachers

    $stateProvider
        .state("display_teachers", {
            url: "/display_teachers",
            templateUrl: "views/display_teachers.html",
            controller: "displayTeachersController"
        });
        
        
        //let`s create a highschool

    $stateProvider
        .state("new_highschool", {
            url: "/new_highschool",
            templateUrl: "views/new_highschool.html",
            controller: "newHighSchoolController"
        });




  //Let`s create a new teacher      
        
    $stateProvider
        .state("new_teacher", {
            url: "/new_teacher",
            templateUrl: "views/new_teacher.html",
            controller: "newTeacherController"
        });
        
        
}]);
/*app.config(['$routeProvider', function($routeProvider) {
 $routeProvider.
   
   when('/aboutUs', {
       url: 'aboutUs',
      templateUrl: 'views/about.html'
   }).
   
   when('/display_highschools', {
      url: '/display_highschools',
      templateUrl: 'views/display_highscools.html', controller: 'displayHighSchoolsController'
   }).
   
   when('/display_teachers',{
       url: '/display_teachers',
      templateUrl: 'views/display_teachers.html' , controller: 'displayTeachersController'
   }).
   
   when('/new_highschool',{
        url: '/new_highschool',
      templateUrl: 'views/new_highschool.html', controller: 'newHighSchoolController'
   }).
   
   when('/new_teacher',{
       url: '/new_teacher',
      templateUrl: 'views/new_teacher.html', controller: 'newTeacherController'
   }).

   otherwise({
       redirectTo: '/aboutUs'
   });

*/
/*
//let`s get a teacher by his/her name

    $stateProvider
        .state("teacherFullName", {
            url: "/teachers/:id",
            templateUrl: "partials/teacherFullName.html",
            controller: "teacherFullNameController"
        });


//let`s get a highschool by its name

    $stateProvider
        .state("highSchoolName", {
            url: "/highschools/:highSchoolName",
            templateUrl: "partials/highSchoolName.html",
            controller: "highSchoolNameController"
        });
}]);
*/