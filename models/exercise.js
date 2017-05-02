var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExerciseSchema = new Schema({
		bodyArea: 	String,
		name: 		String,
		sets: 		String,
		reps: 		String,
		picture: String
});

var Exercise = mongoose.model('Exercise', ExerciseSchema);
module.exports = Exercise;