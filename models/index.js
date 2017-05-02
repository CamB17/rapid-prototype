var mongoose = require('mongoose');
	mongoose.connect("mongodb://localhost/FitGenerator");


module.exports.Exercise = require("./exercise.js");