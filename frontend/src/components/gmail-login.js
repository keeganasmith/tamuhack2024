import React, { useState, Component } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function GmailLogin( setUser ) {

    const handleLogin = useGoogleLogin({
        onSuccess: (code) => {
            console.log("Login: ", code); // to debug
            a
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