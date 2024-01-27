// EmailList.js

import React from 'react';

const EmailList = ({ emails }) => {
  return (
    <div>
      <h2>Email List</h2>
      <ul>
        {emails.map((email, index) => (
          <li key={index}>{email}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmailList;

