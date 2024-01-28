import React, { useState, Component } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';

function GmailLogin({ setEmails }) {
    const navigate = useNavigate();
    const handleLogin = useGoogleLogin({
        onSuccess: async (code) => {
            console.log("Login: ", code);
      
            try {
              // Make an asynchronous API call using Axios
              const response = await axios.post("https://phishnetasdf.onrender.com/api/get_emails", { "token": code.access_token });
      
              console.log(response.data); // Assuming the response contains emails
      
              // Update the state with the received emails
              setEmails(response.data);
              //setEmails(temp_email);
      
              // Navigate to the "/email" route
              navigate("/email");
            } catch (error) {
              console.error('Error fetching emails:', error);
            }
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