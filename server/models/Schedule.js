const mongoose = require('mongoose');

const scheduleSchema = mongoose.Schema({
	roomId: {
		type: mongoose.ObjectId,
		ref: 'room'
	}, 
	startTime: {
		type: Date();
	}, 
	endTime: {
		type: Date();
	}
});

module.exports = Schedule = mongoose.model('schedule', scheduleSchema);