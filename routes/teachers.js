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




//let`s read  teachers
router.get('/teachers', function(request, response) {
    Teacher.findAll().then(function(teachers) {
        response.status(200).send(teachers);
    });
});



//let`s get  teachers using their highschool name (name)
router.get('/teachers/:HighSchoolHighSchoolName', function(request, response) {
    Teacher.findAll({
        where: {
            HighSchoolHighSchoolName: request.params.HighSchoolHighSchoolName
        }
    }).then(function(teachers) {
        response.status(200).send(teachers);
    });
});



// returns teacher by id
router.get('/teachers/:id', function(request, response) {
    Teacher.findById(request.params.id).then(function(teachers) {
        if (teachers) {
            response.status(200).send(teachers);
        }
        else {
            response.status(404).send();
        }
    });
});




//let`s create a new teacher
router.post('/teachers', function(request, response) {
    Teacher.create(request.body).then(function() {
        response.status(201).send;
    }).catch(function(err) {
        console.warn(err);
    })
});



// let`s update a teacher by id
router.put('/teachers/:id', function(request, response) {
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



//let`s delete a teacher (using his/her highschool name)
router.delete('/teachers/:HighSchoolHighSchoolName', function(request, response) {
    Teacher
        .findById(request.params.HighSchoolHighSchoolName)
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




module.exports = router;




/*
//let`s get  teachers using their name
 router.get('/teachers/:teacherFullName',function(request,response){
        Teacher.findAll({
        where:{
            teacherFullName:request.params.teacherFullName
        }
    }).then(function(teachers) {
        response.status(200).send(teachers);
    });
});
*/
/*
// delete a teacher using his/her name
router.delete('/teachers/:teacherFullName', function(request, response) {
    Teacher
        .findById(request.params.teacherFullName)
        .then(function(teacher) {
            if (teacher) {
                teacher
                    .destroy()
                    .then(function() {
                        response.status(204).send();
                    })
                    .catch(function(error) {
                        console.warn(error);
                        response.status(400).send('server error');
                    });
            }
            else {
                response.status(404).send();
            }
        });
});
*/



/*
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
*/
