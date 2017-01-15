let app = angular.module("Tutoring", ['ui.router', 'displayHighSchoolsController', 'displayTeachersController', 'newHighSchoolController', 'deleteHgController', 'editHgController', 'modifyTeaherController']);


app.config(["$stateProvider", '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {

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




    //Let`s delete a teacher    

    $stateProvider
        .state("delete_highschool", {
            url: "/delete_highschool",
            templateUrl: "views/delete_highschool.html",
            controller: "deleteHgController"
        });

    //Let`s create a new teacher     
    $stateProvider
        .state("editHg", {
            url: "/editHg",
            templateUrl: "views/editHg.html",
            controller: "editHgController"
        });


    //Let`s modify a teacher      
    $stateProvider
        .state("modify_teacher", {
            url: "/modify_teacher",
            templateUrl: "views/modify_teacher.html",
            controller: "modifyTeaherController"
        });

}]);

