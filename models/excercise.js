var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExcerciseSchema = new Schema({
		Section: String,
		Reps: 	String
});

var Excercise = mongoose.model('Excercise', ExcerciseSchema);
module.exports = Excercise;