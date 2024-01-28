import React, { useState, Component } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import '../styles/login.css'; // Import the CSS file


import axios from 'axios';
import { useNavigate  } from 'react-router-dom';

function GmailLogin( setUser ) {
    const history = useNavigate ();
    const handleLogin = useGoogleLogin({
        onSuccess: (code) => {
            console.log("Login: ", code); // to debug

            {/*axios.post() // once the api endpoint is created, send auth code to flask server
        .then(res => res.data.token)*/} // depending on json, may need to redo
            history("/email");
        },
        onError: () => {
            console.error();
        },
        flow: 'auth-code'
    });

    return (
        <div className= "login-container">
          <div className = "text-container">
              <h1>Welcome!</h1>
              <h2>Login to Get Started</h2>
            </div>
            <button onClick={() => handleLogin()} className='login-button'>Sign in w/ Google</button>
        </div>
    );
}
//bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800

export default GmailLogin;