import EmailScreen from "./screens/EmailScreen"
import './App.css';
import GmailLogin from './components/gmail-login';

import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  console.log("client: " + process.env.REACT_APP_CLIENT_ID);
  return (
    <div>
      <div className="App">
        <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
          <GmailLogin />
        </GoogleOAuthProvider>
      </div>
      <div>
        <EmailScreen/>
      </div>
    </div>
  );
}

export default App;
