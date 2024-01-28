// src/components/EmailScreen.js
import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import { useNavigate  } from 'react-router-dom';
import '../styles/EmailScreen.css'; // Import the CSS file
import axios from 'axios';


const EmailScreen = ({ emails }) => {

  const history = useNavigate();

  // Sample data for emails

  //const [emails, setEmails] = useState(initialEmails);
  const [selectedEmail, setSelectedEmail] = useState(null);

  const [selectedSenderInfo, setSelectedSenderInfo] = useState(null);
  const [selectedContentInfo, setSelectedContentInfo] = useState(null);

  useEffect(() => {
    if (selectedEmail) {
      const fetchData = async () => {
        try {
          //const response_link = await axios.get(`https://phishnetasdf.onrender.com/api/scan_url/${selectedEmail.link....}`);
          const response_sender = await axios.get(`https://phishnetasdf.onrender.com/api/scan_sender?email_address=${selectedEmail.from.slice(1, -1)}`)
          setSelectedSenderInfo(response_sender.data);

          const response_content = await axios.post(`https://phishnetasdf.onrender.com/api/scan_email_content`, {content: selectedEmail.body})
          setSelectedContentInfo(response_content.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }
  }, [selectedEmail]);

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
            <h2>fraud score (0 is lowest, 100 is highest): {selectedSenderInfo && selectedSenderInfo.fraud_score}</h2>
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
            <h2>email analyzer rating: {selectedContentInfo && selectedContentInfo.data}</h2>
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
