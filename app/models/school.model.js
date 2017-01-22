var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var schoolSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  
  location: {
    type: String,
    required: true
  }

})

var School = mongoose.model("School", schoolSchema);

module.exports = School;
