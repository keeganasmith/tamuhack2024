// EmailList.js

import React from 'react';
import "../styles/EmailList.css";

const EmailList = ({ emails, selectedEmail, onEmailClick }) => {
  return (
    <div className="email-list-container">
      <div className="email-list-tabs">
        {emails.map((email, index) => (
          <button
            key={index}
            className={selectedEmail === email ? 'selected' : ''}
            onClick={() => onEmailClick(email)}
            style={{
              backgroundColor: selectedEmail === email ? '#007BFF' : '#fff',
              color: selectedEmail === email ? '#fff' : '#000',
            }}
          >
            {email}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmailList;
