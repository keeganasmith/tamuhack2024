import React, { useState } from "react";
import { useLinkedIn } from 'react-linkedin-login-oauth2'
import "../styles/login.css"

function LinkedInLogin() {

    console.log("linkedin client id: ", process.env.REACT_APP_LINKEDIN_CLIENT_ID)

    const handleLogin =
        useLinkedIn({
            clientId: process.env.REACT_APP_LINKEDIN_CLIENT_ID,
            redirectUri: `${window.location.origin}/linkedin`,
            onSuccess: (code) => {
                console.log(code);
            },
            onError: (error) => {
                console.log(error);
            },
        });

    return (
        <div>
            <h1>Sign in w/ LinkedIn</h1>
            <button onClick={handleLogin} className='login-button'>Sign in w/ LinkedIn</button>
        </div>
    );
}

export default LinkedInLogin;