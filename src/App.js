import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RoomServiceProvider } from '@roomservice/react';
import React, { useEffect, useState } from 'react';
import { customAlphabet } from 'nanoid';

// Pages
import LandingPage from './pages/LandingPage';
import RoomPage from './pages/RoomPage';

async function AuthCheck({ room, userID }) {
  const response = await fetch('http://localhost:5000/api/roomservice', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      room: room,
      user: userID,
    }),
  });

  if (response.status === 401) {
    throw new Error('Unauthorized!');
  }

  const body = await response.json();
  console.log('body:', body);
  return body;
}

function useUserID() {
  const [userID, setUserID] = useState(null);

  //  useEffect forces this to happen on the client, since `window` is not
  //  available on the server during server-side rendering
  useEffect(() => {
    let userID = window.localStorage.getItem('roomservice-user');
    if (userID == null) {
      const generateBase62ID = customAlphabet(
        '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
        22
      );
      userID = generateBase62ID();
      window.localStorage.setItem('roomservice-user', userID);
    }
    setUserID(userID);
  }, []);

  return userID;
}

function App() {
  const userID = useUserID();
  return (
    <RoomServiceProvider
      online={userID !== null}
      clientParameters={{
        auth: AuthCheck,
        userID: userID,
      }}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <LandingPage />
          </Route>
          <Route exact path='/room'>
            <RoomPage />
          </Route>
        </Switch>
      </Router>
    </RoomServiceProvider>
  );
}

export default App;
