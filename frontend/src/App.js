import './App.css';

import { GoogleOAuthProvider } from '@react-oauth/google';

import GmailLogin from './components/gmail-login';

function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId="217156761187-nd7snmr4dgfbgrailbchl9357st6drme.apps.googleusercontent.com">
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
