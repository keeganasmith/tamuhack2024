import React, { useState, Component } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';

function GmailLogin({ setEmails }) {
    const navigate = useNavigate();
    const handleLogin = useGoogleLogin({
        onSuccess: async (code) => {
            console.log("Login: ", code);
      
            const temp_email = [
              { id: 1, sender: 'person@yahoo', subject: 'subject123', content: 'Lorem ipsum dolor sit amet, consecteTincidunt eget nullam non nisi est. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Consequat nisl vel pretium lectus. Dolor sit amet consectetur adipiscing elit ut aliquam. Diam ut venenatis tellus in metus. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Nisl vel pretium lectus quam id leo in vitae. Est sit amet facilisis magna etiam tempor orci. Id venenatis a condimentum vitae sapien. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Mauris nunc congue nisi vitae. Est ullamcorper eget nulla facilisi etiam dignissim diam quis. Dolor magna eget est lorem. Sit amet aliquam id diam maecenas.' },
              { id: 2, sender: 'bob@gmail', subject: 'subject245', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non odio euismod lacinia at. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Tincidunt eget nullam non nisi est. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Consequat nisl vel pretium lectus. Dolor sit amet consectetur adipiscing elit ut aliquam. Diam ut venenatis tellus in metus. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Nisl vel pretium lectus quam id leo in vitae. Est sit amet facilisis magna etiam tempor orci. Id venenatis a condimentum vitae sapien. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Mauris nunc congue nisi vitae. Est ullamcorper eget nulla facilisi etiam dignissim diam quis. Dolor magna eget est lorem. Sit amet aliquam id diam maecenas.' },
              // Add more emails as needed
            ];
      
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