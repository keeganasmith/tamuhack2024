import React, { useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';


import EmailScreen from "./screens/EmailScreen"
import GmailLogin from './components/gmail-login';

function App() {

  const [user, setUser] = useState(false);

  return (
    <div>
      <div className="App">
        <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
          <GmailLogin setUserLoggedIn={setUser} />
        </GoogleOAuthProvider>
      </div>
      <div>
        <EmailScreen/>
      </div>
    </div>
  );
}

export default App;
