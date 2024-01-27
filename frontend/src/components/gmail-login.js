import React, {Component} from 'react';
import { GoogleLogin } from '@react-oauth/google';

function GmailLogin () {

    return (
        <div>
            <h1>Google Login for Gmail</h1>
            <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </div>
    );
}

export default GmailLogin;