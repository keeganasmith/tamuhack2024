// src/components/EmailScreen.js
import React, { useState } from 'react';
import parse from 'html-react-parser';
import { useNavigate  } from 'react-router-dom';
import '../styles/EmailScreen.css'; // Import the CSS file

const EmailScreen = ({ emails }) => {

  const history = useNavigate();

  // Sample data for emails

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
                <h4>from: {email.from}</h4>
                <p>subject: {email.subject}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="email-content">
        {selectedEmail ? (
          <div>
            <p>{selectedEmail.body}</p>
          </div>
        ) : (
          <p>Select an email to view its content.</p>
        )}
      </div>

      <div className="email-checker">
        <section>
          <h2>Sender Checker</h2>
          {selectedEmail ? (
          <div>
            <h2>sender: {selectedEmail.from}</h2>
            <h2>fraud score (0 is lowest, 100 is highest): {0}</h2>
          </div>
        ) : (
          <p>Select an email to analyze.</p>
        )}
        </section>

        <section>
          <h2>Url Checker</h2>
          {selectedEmail ? (
          <div>
            <h2>domain: {"link"}</h2>
            <h2>risk score (0 is lowest, 100 is highest): {50}</h2>
          </div>
        ) : (
          <p>Select an email to analyze.</p>
        )}
        </section>

        <section>
          <h2>Content Checker</h2>
          {selectedEmail ? (
          <div>
            <h2>email analyzer rating: website safe</h2>
          </div>
        ) : (
          <p>Select an email to analyze.</p>
        )}
        </section>
      </div>
    </div>
  );
};

export default EmailScreen;
