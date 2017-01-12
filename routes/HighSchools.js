var models = require("../models");
var express = require("express");
var router = express.Router();



var HighSchool = models.HighSchool;

//let`s create a new highschool
router.post("/highschools", function(request, response) {
  
  HighSchool.create(request.body).then(function(highschool) {
        HighSchool.findById(highschool.highSchoolName).then(function(highschool) {
            response.status(201).send(highschool);
        });
    });
});


router.post('/highschools', function(request,response) {
    HighSchool.create(request.body).then(function(){
      response.status(201).send;
    }).catch(function(err){
      console.warn(err);
    })
});



//let`s read highschools
router.get("/highschools", function(request, response) {
  HighSchool.findAll().then(function(highschools){
            response.status(200).send(highschools);
        });
    });






//let`s get a highschool using an id (its name)
 router.get('/highschools/:id',function(request,response){
        HighSchool.findById(request.params.id).then(function(highschool){
            if(highschool){
                response.status(200).send(highschool);
            }
            else{
                response.status(404).send();
            }
        });
        
    });


// let`s remove a highschool using an id (using its name)
router.delete('/highschools/:id', function(request, response) {
    HighSchool
        .findById(request.params.id)
        .then(function(highschool) {
            if (highschool) {
                highschool.destroy().then(function() {
                        response.status(200).send('Highschool was successfully deleted!');
                    })
                    .catch(function(error) {
                        console.warn(error);
                        response.status(500).send('We`ve got an error!');
                    });
            }
            else {
                response.status(404).send('There`s no highschool with this name!');
            }
        });

});



//update a highschool (using its name)
    
    router.put('/highschools/:highSchoolName',function(request,response){
        HighSchool.findById(request.params.id).then(function(highschool){
            if(highschool){
                highschool.updateAttributes(request.body).then(function(){
                    response.status(200).send('Highschool was successfully updated!');
                }).catch(function(error){
                    console.warn(error);
                    response.status(500).send('We`ve got an error!');
                });
            } else{
                response.status(404).send();
            }
            
        });
    });
    
    
    

module.exports = router;



    
  