var mongoose = require('mongoose');
require('../models/school.model.js');
var School = mongoose.model('School');

var config = require('../../config/db.js');
var firebase = require("../../config/firebase.js");
var admin = require("firebase-admin");


var SchoolController = function () { }
SchoolController.prototype.createSchool = function (req, res) {

    if (!req.body.name || !req.body.location) {
        return res.status(422).send({
            message: 'Name and Location are required',
            success: false
        });
    }
    
    firebase.database().ref('/schools').push({
        name: req.body.name,
        time: req.body.time,
        location: {
            state: req.body.location.state,
            street: req.body.location.street,
            floor: req.body.location.floor
        }
    });

    return res.status(200).send({
        message: "All good"
    })
};

module.exports = SchoolController;
