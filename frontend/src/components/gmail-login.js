import React, { useState, Component } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';

function GmailLogin( setUser ) {
    const history = useNavigate ();
    const handleLogin = useGoogleLogin({
        onSuccess: (code) => {
            console.log("Login: ", code); // to debug

            axios.post() // once the api endpoint is created, send auth code to flask server
            .then(res => res.data.token) // depending on json, may need to redo
            history("/email");
        },
        onError: () => {
            console.error();
        },
        flow: 'implicit'
    });

    return (
        <div>
            <h1>Sign in w/ Gmail</h1>
            <button onClick={() => handleLogin()} className='bg-red-500 text-white font-bold py-2 px-4 rounded-full shadow hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'>Sign in w/ Google</button>
        </div>
    );
}

export default GmailLogin;