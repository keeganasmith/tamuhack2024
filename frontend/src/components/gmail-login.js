import React, {Component} from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate  } from 'react-router-dom';

const GmailLogin = () => {
  const history = useNavigate ();
    return (
        <div>
            <h1>Google Login for Gmail</h1>
            <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
              history("/email");
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </div>
    );
}

export default GmailLogin;