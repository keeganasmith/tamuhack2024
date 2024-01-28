// src/components/EmailScreen.js
import React, { useState } from 'react';
import parse from 'html-react-parser';
import '../styles/EmailScreen.css'; // Import the CSS file

const EmailScreen = () => {
  // Sample data for emails
  const initialEmails = [
    { id: 1, subject: 'First Email', content: 'Content of the first email.' },
    { id: 2, subject: 'Second Email', content: 'Content of the second email.' },
    // Add more emails as needed
  ];

  const [emails, setEmails] = useState(initialEmails);
  const [selectedEmail, setSelectedEmail] = useState(null);

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
  };

  return (
    <div className="email-screen">
      <div className="email-list">
        <h2>Emails</h2>
        <ul>
          {emails.map((email) => (
            <li key={email.id} onClick={() => handleEmailClick(email)}>
              <div>
                <h4>{email.subject}</h4>
                <p>{email.content.substring(0, 50)}...</p>
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
