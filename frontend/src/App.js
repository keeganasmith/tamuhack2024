import EmailScreen from "./screens/EmailScreen"
import './styles/App.css';
import GmailLogin from './components/gmail-login';

import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <div>
      <div className="App">
        <GoogleOAuthProvider clientId="217156761187-nd7snmr4dgfbgrailbchl9357st6drme.apps.googleusercontent.com">
        </GoogleOAuthProvider>
      </div>
      <div>
        <EmailScreen/>
      </div>
    </div>
  );
}

export default App;
