var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/excercises");


module.exports = require(".excercise.js");