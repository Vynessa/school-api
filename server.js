var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var db = require("./config/db.js");

var port = 3000 || process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, X-Requested-With, Authorization');
  next();
});

app.use(express.static(__dirname + '/public'));

require('./app/routes/school.route.js')(app);

app.listen(port);

console.log('Magic happens on port ' + port);

exports = module.exports = app;
