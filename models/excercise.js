var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExcerciseSchema = new Schema({
		bodyArea: 	String,
		name: 		String,
		sets: 		String,
		reps: 		String,
		picture: String
});

var Excercise = mongoose.model('Excercise', ExcerciseSchema);
module.exports = Excercise;