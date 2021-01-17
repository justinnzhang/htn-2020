const express = require('express');
const router = express.Router();

const Room = require("../../models/Room");

router.get('/test', (req, res) => {
	res.send('The admin route works 🙂');
});

router.post('/create/:name/:cap', (req, res) => {
	const newRoom = new Room({
		name: req.params.name,
		capacity: req.params.cap
	});
	newRoom.save().then((room) => res.status(200).json(room)).catch((err) => res.status(400).json(err.response));
});

module.exports = router;