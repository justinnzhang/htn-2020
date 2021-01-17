const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
	name: { 
		type: String,
		required: true 
	},
	capacity: { 
		type: Number, 
		max: 20		// arbitrary max capacity
	}
});

module.exports = Room = mongoose.model('room', roomSchema);