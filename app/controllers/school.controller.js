var mongoose = require('mongoose');
require('../models/school.model.js');
var School = mongoose.model('School');

var config = require('../../config/db.js');

var SchoolController = function(){}

SchoolController.prototype.createSchool = function(req, res) {
  if (!req.body.name || !req.body.location){
    return res.status(422).send({
      message: 'Name and Location are required',
      success: false
    });
  }
  School.findOne({
    name: req.body.name
  }, function(err, school){
    if (err){
      return res.json(err);
    } else if (school){
      res.json({
        message: "The School exists",
        success: false
      });
    } else {
      console.log("inside the else block")
      School.create(req.body, function(err, school){
        if (err){
          console.log("error")
          return res.json(err);
        }
        console.log("create school")
        return res.json(school);
      });
    }
  });
};

module.exports = SchoolController;
