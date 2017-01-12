module.exports = function(sequelize, Sequelize) {

var HighSchool = sequelize.define('HighSchools',{
    highSchoolName: { 
        type: Sequelize.STRING,
        field: 'highSchoolName',
         primaryKey: true,
        validate: {
          isAlpha: true
    }
    },
    highSchoolCity:
    {
        type: Sequelize.STRING,
        field: 'highSchoolCity',
        validate:
        {     length: [1, 20],
               isAlpha: true
        }
    },
    numberOfAwards : {
        type: Sequelize.INTEGER,
        field: 'numberOfAwards',
         validate: {
            isNumeric: true,
         isInt: true
    }
  },
    graduationRate : {
        type: Sequelize.INTEGER,
        field: 'graduationRate',
         validate: {
               isNumeric: true,
         isInt: true
    }
  },
    highSchoolContact_phoneNumber :  {
        
    type: Sequelize.INTEGER,
    field: 'highSchoolContact_phoneNumber',
    validate: {
      // custom validation
      checkPhoneNumber: function() {
        if (this.highSchoolContact_phoneNumber.length != 10) {
          throw new Error("This phone number doesn`t have ten digits!");
        }
      }
    }
  },
  
  yearOfFoundation:
  { type: Sequelize.INTEGER,
  field: 'yearOfFoundation',
      validate: {lengthgh: [4]}
  },
  },
{
     classMethods: {
      associate: function(models) {
        HighSchool.hasMany(models.Teacher)
      }
     }
},

{
    timestamps: false,
    tableName: 'HighSchools'
});




return HighSchool;
};
