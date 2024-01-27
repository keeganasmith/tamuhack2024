import React, {Component} from 'react';
import { GoogleLogin } from '@react-oauth/google';

function GmailLogin () {

    const success = (logRes) => {

    }

    const error = (logErr) => {

    }

    return (
        <div>
            <GoogleLogin onSuccess={success} onError={error}/>
        </div>
    );
}

export default GmailLogin;