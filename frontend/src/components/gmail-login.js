import React, { useState, Component } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';

function GmailLogin( setUser ) {
    const history = useNavigate ();
    const handleLogin = useGoogleLogin({
        onSuccess: (code) => {
            console.log("Login: ", code); // to debug
            history("/email");
        },
        onError: () => {
            console.error();
        },
        flow: 'auth-code'
    });

    return (
        <div>
            <h1>Google Login for Gmail</h1>
            <button onClick={() => handleLogin()}></button>
        </div>
    );
}

export default GmailLogin;