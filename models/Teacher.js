module.exports = function(sequelize, DataTypes) {

    var Teacher = sequelize.define('Teacher', {

        HighSchoolHighSchoolName: {
            type: DataTypes.STRING,
            field: 'HighSchoolHighSchoolName',
            value: "HighSchool",
            notEmpty: {
                msg: "Highschool is, ofc, required!"
            },
        },

        teacherFullName: {
            type: DataTypes.STRING,
            field: 'teacherFullName',
            //        primaryKey: true,
            validate: {
                //    isAlpha: true,
                notEmpty: {
                    msg: "Name is, ofc, required!"
                },
            }
        },
        
        isHeOrSheTutoring: {
            type: DataTypes.INTEGER,
            field: 'isHeOrSheTutoring',
            validate: {
                isNumeric: true
            }
        },
        
        teacherAdress: {
            type: DataTypes.STRING,
            field: 'teacherAdress'
        },

        nrOfChildrenHeOrSheTutors: {
            type: DataTypes.INTEGER,
            field: 'nrOfChildrenHeOrSheTutors'
        },

        nrOfChildrenHeOrSheCanTutor: {
            type: DataTypes.INTEGER,
            field: 'nrOfChildrenHeOrSheCanTutor'
        },

        teacherEmail: {
            type: DataTypes.STRING,
            field: 'teacherEmail'
        },

        taughtSubject: {
            type: DataTypes.STRING,
            field: 'taughtSubject'
        },
    }, 

    {
        timestamps: false,
        tableName: 'teachers',
        classMethods: {
            associate: function(models) {
                Teacher.belongsTo(models.HighSchool, {
                    onDelete: "CASCADE",
                });
            }
        }
    });

    Teacher.removeAttribute('id');
    return Teacher;
    
};
