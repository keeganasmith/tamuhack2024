import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmailScreen from './screens/EmailScreen';
import LoginScreen from './screens/LoginScreen';


const App = () => {

  
  const initialEmails = [
    { id: 1, subject: 'First Email', content: 'Content of the first email.' },
    { id: 2, subject: 'Second Email', content: 'Content of the second email.' },
    // Add more emails as needed
  ];

  const [emails, setEmails] = useState(initialEmails);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen setEmails={setEmails} />} />
        <Route path="/email" element={<EmailScreen emails={emails}/>} />
      </Routes>
    </Router>
  );
};

export default App;
