import './App.css';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

import GmailLogin from './components/gmail-login';

function App() {
  console.log("client: " + process.env.REACT_APP_CLIENT_ID);
  return (
    <div className="App">
      <div>
        <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
          <GmailLogin />
        </GoogleOAuthProvider>
      </div>
    </div>
  );
}

export default App;
