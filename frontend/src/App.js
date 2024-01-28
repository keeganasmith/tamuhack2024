import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmailScreen from './screens/EmailScreen';
import LoginScreen from './screens/LoginScreen';


const App = () => {


  const initialEmails = [
    { id: 1, sender: 'person@yahoo', subject: 'subject123', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non odio euismod lacinia at. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Tincidunt eget nullam non nisi est. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Consequat nisl vel pretium lectus. Dolor sit amet consectetur adipiscing elit ut aliquam. Diam ut venenatis tellus in metus. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Nisl vel pretium lectus quam id leo in vitae. Est sit amet facilisis magna etiam tempor orci. Id venenatis a condimentum vitae sapien. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Mauris nunc congue nisi vitae. Est ullamcorper eget nulla facilisi etiam dignissim diam quis. Dolor magna eget est lorem. Sit amet aliquam id diam maecenas.' },
    { id: 2, sender: 'bob@gmail', subject: 'subject245', content: 'Lorem ipsum dolor elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non odio euismod lacinia at. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Tincidunt eget nullam non nisi est. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Consequat nisl vel pretium lectus. Dolor sit amet consectetur adipiscing elit ut aliquam. Diam ut venenatis tellus in metus. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Nisl vel pretium lectus quam id leo in vitae. Est sit amet facilisis magna etiam tempor orci. Id venenatis a condimentum vitae sapien. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Mauris nunc congue nisi vitae. Est ullamcorper eget nulla facilisi etiam dignissim diam quis. Dolor magna eget est lorem. Sit amet aliquam id diam maecenas.' },
    // Add more emails as needed
  ];

  const [emails, setEmails] = useState(initialEmails);

  return (
    <div>
      <header className='App-header'>
        <img src="./assets/whitelogo.png" />
        <h1 style={{ color: 'black', fontSize: 35}}>Phish Net</h1>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen setEmails={setEmails} />} />
          <Route path="/email" element={<EmailScreen emails={emails} />} />
        </Routes>
      </Router>
    </div>

  );
};

export default App;
