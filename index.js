require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
var cors = require('cors');

const connectDB = require('./db');

const port = process.env.PORT || 5000;

const rooms = require('./routes/rooms');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


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

// ROOM SERVICE API
app.post('/api/roomservice', async (req, res) => {
  const body = req.body;

  console.log('Body:', body);

  const user = Math.random().toString(36).substr(2, 9);

  if (!user) {
    return res.sendStatus(401);
  }
  const resources = [
    {
      object: 'room',
      room: body.room,
      permission: 'join',
      name: body.name,
    },
  ];
  const r = await fetch('https://super.roomservice.dev/provision', {
    method: 'POST',
    headers: {
      Authorization: `Bearer: ${process.env.ROOMSERVICE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: user,
      resources: resources,
    }),
  });
  console.log(r.json);
  return res.json(await r.json());
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(port, () => console.log(`Server running on port ${port}`));