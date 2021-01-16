const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
	name: { 
		type: String,
		required: true 
	},
	capacity: { 
		type: Number, 
		max: 20		// arbitrary max capacity
	},	
	booked: {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model('Room', roomSchema);