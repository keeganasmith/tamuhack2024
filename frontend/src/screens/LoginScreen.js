import GmailLogin from '../components/gmail-login';
import LinkedInLogin from '../components/linkedin-login';
import { useNavigate  } from 'react-router-dom';
// import "../styles/App.css";
import { GoogleOAuthProvider } from '@react-oauth/google';

const LoginScreen = ({ setEmails }) => {
    const history = useNavigate();
    console.log("client: " + process.env.REACT_APP_GOOGLE_CLIENT_ID);
    return (
      <div>
        <div className="App">
          <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
            <GmailLogin navigation={history} setEmails={setEmails}/>
          </GoogleOAuthProvider>
          <LinkedInLogin />
        </div>
      </div>
    );
  }

export default LoginScreen;
