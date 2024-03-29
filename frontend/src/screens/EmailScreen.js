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
  const [selectedURLInfo, setSelectedURLInfo] = useState(null);

  useEffect(() => {
    if (selectedEmail) {
      const fetchData = async () => {
        try {
          const response_sender = await axios.get(`https://phishnetasdf.onrender.com/api/scan_sender?email_address=${selectedEmail.from.slice(1, -1)}`)
          setSelectedSenderInfo(response_sender.data);

          const response_content = await axios.post(`https://phishnetasdf.onrender.com/api/scan_email_content`, {content: selectedEmail.body})
          setSelectedContentInfo(response_content.data);

          const response_url = await axios.post(`https://phishnetasdf.onrender.com/api/scan_urls`, {content: selectedEmail.body})
          setSelectedURLInfo(response_url.data);


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
                <h3>From: {email.from}</h3>
                <p>Subject: {email.subject}</p>
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
          <p style={{ color: 'white'}}>Select an email to view its content.</p>
        )}
      </div>

      <div className="email-checker">
        <h2>Phishing Report</h2>
        <section>
          <h3>Sender Checker</h3>
          {selectedEmail ? (
          <div>
            <p>Sender: {selectedEmail.from}</p>
            <p>Fraud Score (0 is lowest, 100 is highest): {selectedSenderInfo && selectedSenderInfo.fraud_score}</p>
            {/* <p>Leaked in database breach?: {selectedSenderInfo && selectedSenderInfo.leaked}</p> */}
          </div>
        ) : (
          <p>Select an email to analyze.</p>
        )}
        </section>

        <section>
          <h3>Url Checker</h3>
          {selectedEmail ? (
          <div>
            <p>Domain: {selectedURLInfo && selectedURLInfo.domain}</p>
            <p>Risk Score (0 is lowest, 100 is highest): {selectedURLInfo && selectedURLInfo.risk_score}</p>
          </div>
        ) : (
          <p>Select an email to analyze.</p>
        )}
        </section>

        <section>
          <h3>Content Checker</h3>
          {selectedEmail ? (
          <div>
            <p>Email Analyzer Rating: {selectedContentInfo && selectedContentInfo}</p>
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
