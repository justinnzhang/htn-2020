const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	firstname: { 
		type: String,
		required: true
	},
	lastname: { 
		type: String,
		required: true
	},
	email: { 
		type: String,
		required: true
	}
});

module.exports = User = mongoose.model('user', userSchema);