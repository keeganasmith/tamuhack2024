import React, { useState } from "react";
import { useLinkedIn } from 'react-linkedin-login-oauth2'

function LinkedInLogin() {

    console.log("linkedin client id: ", process.env.REACT_APP_LINKEDIN_CLIENT_ID)

    const {handleLogin} =
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
            <button onClick={handleLogin} className='bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'>Sign in w/ LinkedIn</button>
        </div>
    );
}

export default LinkedInLogin;