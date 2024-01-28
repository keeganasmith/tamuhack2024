import GmailLogin from '../components/gmail-login';
import { useNavigate  } from 'react-router-dom';
import "../styles/login.css"
import { GoogleOAuthProvider } from '@react-oauth/google';

const LoginScreen = ({ setEmails }) => {
    const history = useNavigate();
    console.log("client: " + process.env.REACT_APP_GOOGLE_CLIENT_ID);
    return (
        <div className="login-container">
          <div className = "info-container">
            <div className = "text-container">
              <h1>Welcome!</h1>
              <h1>Sign in to get started!</h1>
            </div>
            <div className = "gmail-container">
              <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
                <GmailLogin navigation={history} setEmails={setEmails}/>
              </GoogleOAuthProvider>
            </div>
          </div>
        </div>
    );
  }

export default LoginScreen;
