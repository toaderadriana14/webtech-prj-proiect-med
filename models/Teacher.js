module.exports = function(sequelize, Sequelize) {

var Teacher = sequelize.define('Teachers',{
    teacherFullName :{
         type: Sequelize.STRING,
         field: 'teacherFullName',
         primaryKey: true,
          validate: {
              isAlpha: true
    }
  },
    isHeOrSheTutoring : {
       type: Sequelize.INTEGER,
       field: 'isHeOrSheTutoring',
        validate: {
            isNumeric: true
    }
  },
    teacherAdress : 
    {type: Sequelize.STRING,
    field: 'teacherAdress'},
    
    nrOfChildrenHeOrSheTutors  :
    {type: Sequelize.INTEGER,
    field: 'nrOfChildrenHeOrSheTutors'},
    
    nrOfChildrenHeOrSheCanTutor : 
    {type: Sequelize.INTEGER,
    field: 'nrOfChildrenHeOrSheCanTutor'},
    
    teacherEmail:
    {type: Sequelize.STRING,
    field: 'teacherEmail'},
    
    taughtSubject:
    {type: Sequelize.STRING,
    field: 'taughtSubject'},
    
    highSchoolName:
    {type: Sequelize.STRING,
    field: 'highSchoolName'}
},
{
    timestamps: false,
    tableName: 'Teachers'
});

    
return Teacher;
};
