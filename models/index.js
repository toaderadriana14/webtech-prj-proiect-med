"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var config    = require(path.join(__dirname, '..', 'config', 'db.json'));

//var sequelize = new Sequelize('meditatii-db', 'toaderadriana14', '', {
//   dialect: 'mysql',
//   port: 3306
//});
//
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db        = {};

var names= [];

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    names.push(model);
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.names=names;
module.exports = db;

