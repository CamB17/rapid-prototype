var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExcerciseSchema = new Schema({
		bodyArea: 	String,
		name: 		String,
		sets: 		String,
		reps: 		String
});

var Excercise = mongoose.model('Excercise', ExcerciseSchema);
module.exports = Excercise;