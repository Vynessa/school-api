// var School = require('../models/school.model.js');
var express = require("express");
var router = express.Router();
var SchoolController = require('../controllers/school.controller.js');

var school = new SchoolController;

module.exports = function(app) {
  router.route("/schools")
    .post(school.createSchool);
  app.use("/api" , router);
};
