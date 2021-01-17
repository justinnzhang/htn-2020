const mongoose = require('mongoose');

const userToScheduleSchema = mongoose.Schema({
	userId: {
		type: mongoose.ObjectId,
		ref: 'user'
	},
	scheduleId: {
		type: mongoose.ObjectId,
		ref: 'schedule'
	}
});

module.exports = UserToSchedule = mongoose.model('userToSchedule', userToScheduleSchema);