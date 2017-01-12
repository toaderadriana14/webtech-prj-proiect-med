var models = require("../models");
var express = require("express");
var router = express.Router();




var HighSchool = models.HighSchool;
var Teacher = models.Teacher;
/*
//connections between tables
HighSchool.hasMany(Teachers, {
  //onDelete: 'CASCADE',
  foreignKey: 'highSchoolName'
});
Teachers.belongsTo(HighSchool,
{foreignKey: 'highSchoolName'});
*/

//let`s create a new teacher

router.post("/teachers", function(request, response) {
  
  Teacher.create(request.body).then(function(teacher) {
        Teacher.findById(teacher.teacherFullName).then(function(teacher) {
            response.status(201).send(teacher);
        });
    });
});

   router.post('/teachers', function(request,response) {
    Teacher.create(request.body).then(function(){
      response.status(201).send;
    }).catch(function(err){
      console.warn(err);
    })
});



//let`s read  teachers
router.get("/teachers", function(request, response) {
  Teacher.findAll().then(function(teachers){
            response.status(200).send(teachers);
        });
    });





//let`s get a teacher using his/her id (name)
 router.get('/teachers/:id',function(request,response){
        Teacher.findById(request.params.id).then(function(teacher){
            if(teacher){
                response.status(200).send(teacher);
            }
            else{
                response.status(404).send();
            }
        });
        
    });




//let`s delete a teacher
router.delete('/Teachers/:id', function(request, response) {
   Teacher
        .findById(request.params.id)
        .then(function(teacher) {
            if (teacher) {
                teacher.destroy().then(function() {
                        response.status(200).send('deleted_done!');
                    })
                    .catch(function(error) {
                        console.warn(error);
                        response.status(500).send('We`ve got an error!');
                    });
            }
            else {
                response.status(404).send('We don`t have a teacher with that name in our DB!');
            }
        });

})



router.get('/Teachers/:id/HighSchools', (request, response) => {
    Teacher
        .findAll({
            where: {
                highSchoolName: request.params.id
            },
            include: [ Teacher,HighSchool]
        })
        .then((HighSchool) => {
            response.status(201).send(HighSchool);
        })
});



router.post('/Teachers/:id/HighSchools', (request, response) => {
    Teacher
        .find({
            where: {
                highSchoolName: request.params.id
            }
        })
        .then((teacher) => {
            var highschool = request.body
            HighSchool.find({
                    where: {
                        name: highschool.highSchoolName
                    }
                })
                .then(function(highSchoolFound) {
                    var newteacher= {}
                    newteacher.teacherFullName = request.params.id;
                    if (highSchoolFound) {
                        newteacher.highSchoolName = highSchoolFound.highSchoolName;
                        return Teacher.create(newteacher)
                    }
                    else {
                        var newHighSchool = {};
                        newHighSchool.highSchoolName = highschool.highSchoolName;
                        newHighSchool.highSchoolCity = highschool.highSchoolCity;
                        newHighSchool.numberOfAwards = highschool.numberOfAwards;
                         newHighSchool.graduationRate = highschool.graduationRate;
                        newHighSchool.highSchoolContact_phoneNumber = highschool.highSchoolContact_phoneNumber;
                         newHighSchool.yearOfFoundation = highschool.yearOfFoundation;
                        HighSchool.create(newHighSchool).then(function(highschool) {
                            HighSchool.findById(highschool.highSchoolName).then(function(highSchoolCity) {
                                newteacher.highSchoolName = highschool.highSchoolName;
                                return Teacher.create(newteacher);

                            });
                        });
                    }
                })
        })
        .then(() => {
            response.status(201).send('done')
        })
        .catch((error) => {
            console.warn(error)
            response.status(500).send('We`ve got an error!')
        })

})

router.put('/Teachers/:id', function(request, response) {
    Teacher
        .findById(request.params.id)
        .then(function(teacher) {
            if (teacher) {
                teacher
                    .updateAttributes(request.body)
                    .then(function() {
                        response.status(200).send('updated_done!');
                    })
                    .catch(function(error) {
                        console.warn(error);
                        response.status(500).send('We`ve got an error!');
                    });

            }
            else {
                response.status(400).send();
            }
        });

});

router.put('/Teachers/:id/HighSchools', (request, response) => {
    Teacher
        .find({
            where: {
                teacherFullName: request.params.id,
                highSchoolName: request.body.teacherFullName
            }
        })
        .then((teacher) => {
            Teacher
            .find({
                where: {
                    id : teacher.highSchoolName
                }
            }).then((highschool) => {
               
                       
                highschool.highSchoolNamename = request.body.HighSchool.highSchoolName;
                highschool.highSchoolCity = request.body.Highschool.highSchoolCity;
                        highschool.numberOfAwards = request.body.Highschool.numberOfAwards;
                        highschool.graduationRate = request.body.Highschool.graduationRate;
                        highschool.highSchoolContact_phoneNumber = request.body.Highschool.highSchoolContact_phoneNumber;
                         highschool.yearOfFoundation = request.body.Highschool.yearOfFoundation;
              
                return highschool.save();
            })
        })
        .then(() => {
            response.status(201).send('Modified_done!')
        })
        .catch((error) => {
            console.warn(error)
            response.status(500).send('We`ve got an error!')
        })

});



module.exports = router;