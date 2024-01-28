import React, { useState, Component } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';

function GmailLogin( setUser ) {
    const history = useNavigate ();
    const handleLogin = useGoogleLogin({
        onSuccess: (code) => {
            console.log("Login: ", code); // to debug

            axios.post("https://phishnetasdf.onrender.com/api/get_emails", {"token" : code.access_token}) // once the api endpoint is created, send auth code to flask server
            history("/email");
        },
        onError: () => {
            console.error();
        },
        flow: 'implicit',
        scope: "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/gmail.readonly"
    });

    return (
        <div>
            <h1>Sign in w/ Gmail</h1>
            <button onClick={() => handleLogin()} className='bg-red-500 text-white font-bold py-2 px-4 rounded-full shadow hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'>Sign in w/ Google</button>
        </div>
    );
}

export default GmailLogin;