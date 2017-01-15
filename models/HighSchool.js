module.exports = function(sequelize, DataTypes) {

    var HighSchool = sequelize.define('HighSchool', {
            highSchoolName: {
                type: DataTypes.STRING,
                field: 'highSchoolName',
                primaryKey: true,

            },
            
            highSchoolCity: {
                type: DataTypes.STRING,
                field: 'highSchoolCity',
                validate: {
                    isAlpha: true,
                }
            },
            
            numberOfAwards: {
                type: DataTypes.INTEGER,
                field: 'numberOfAwards',
                validate: {
                    isNumeric: true,
                    isInt: true
                }
            },
            
            graduationRate: {
                type: DataTypes.INTEGER,
                field: 'graduationRate',
                validate: {
                    isNumeric: true,
                    isInt: true
                }
            },
            
            highSchoolContact_phoneNumber: {

                type: DataTypes.INTEGER,
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

            yearOfFoundation: {
                type: DataTypes.INTEGER,
                field: 'yearOfFoundation'
            },
        },

        {
            timestamps: false,
            tableName: 'highschools',
            freezeTableName: true,

            classMethods: {
                associate: function(models) {
                    HighSchool.hasMany(models.Teacher);
                },
            },

        });

    return HighSchool;
};
