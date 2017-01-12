var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var Sequelize = require('sequelize');
var models = require('./models');
var sequelize = models.sequelize;



var app = new express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/app'));
//app.use(express.static('public'));



var nodeadmin = require('nodeadmin');
app.use(nodeadmin(app));
app.listen(process.env.PORT);


/*
var sequelize = new Sequelize("meditatii-db", "root", "", {
  dialect: "mysql",
  host: 'localhost',
  port: 3306
});



sequelize.authenticate()
.then(function(err) {

  if (!!err) {
    console.log("You can`t connect to the database!", err);
  }
  else {
    console.log("You have connected to the database!");
  }
});




// Create the tables:
HighSchool.sync();
Teacher.sync();


HighSchool.sync().then(function() {
  console.log("Table 'HIGHSCHOOLS' was created!");
}).catch(function(error) {
  console.log("The table`s couldn`t be created!", error);
});


Teachers.sync().then(function() {
  console.log("Table 'TEACHERS' was created!");
}).catch(function(error) {
  console.log("The table`s couldn`t be created!", error);
});
*/





/*///connections between tables
HighSchool.hasMany(Teacher, {
  //onDelete: 'CASCADE',
  foreignKey: 'highSchoolName'
});
Teacher.belongsTo(HighSchool,
{foreignKey: 'highSchoolName'});

*/
//metode rest 
var licee = require(__dirname + "/routes/HighSchools.js");
app.use(licee);

var profesori =require(__dirname + "/routes/Teachers.js");
app.use(profesori);


//app.use(require("./routes/HighSchools.js"));
//app.use(require("./routes/Teachers.js"));

app.get('/create', (req, res) => {
    sequelize
        .sync({
            force: true
        })
        .then(() => {
            res.status(201).send('created')
        })
        .catch((error) => {
            console.warn(error)
            res.status(500).send('error')
        })
})




//app.listen(8080);

