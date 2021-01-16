require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors');

const connectDB = require('./db');

const port = process.env.PORT || 5000;

const rooms = require("./api/routes/rooms");

// cors
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

connectDB();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
  })
);
app.use(bodyParser.json());
app.use('/api/rooms', rooms);

app.listen(port, () => console.log(`Server running on port ${port}`));

// Default display
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
