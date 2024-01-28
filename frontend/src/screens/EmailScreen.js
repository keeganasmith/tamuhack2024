// src/components/EmailScreen.js
import React, { useState } from 'react';
import parse from 'html-react-parser';
import { useNavigate  } from 'react-router-dom';
import '../styles/EmailScreen.css'; // Import the CSS file

const EmailScreen = ({ emails }) => {

  const history = useNavigate();

  // Sample data for emails

  console.log(emails);

  //const [emails, setEmails] = useState(initialEmails);
  const [selectedEmail, setSelectedEmail] = useState(null);

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
  };

  const handleSignOut = () => {
    // Implement your sign-out logic here
    console.log('Signing out...');
    history("/");
  };

  return (
    <div className="email-screen">
      <div className="sign-out-button" onClick={handleSignOut}>
        <button>Sign Out</button>
      </div>

      <div className="email-list">
        <h2>Emails</h2>
        <ul>
          {Array.isArray(emails) && emails.length > 0 && emails.map((email) => (
            <li key={email.id} onClick={() => handleEmailClick(email)}>
              <div>
                <h4>{email.subject}</h4>
                <p>{email.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="email-content">
        {selectedEmail ? (
          <div>
            <p>{selectedEmail.content}</p>
          </div>
        ) : (
          <p>Select an email to view its content.</p>
        )}
      </div>
    </div>
  );
};

export default EmailScreen;
