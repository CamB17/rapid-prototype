var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/FitGenerator");


module.exports.Excercise = require("./excercise.js");