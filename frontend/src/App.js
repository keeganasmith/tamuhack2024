import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmailScreen from './screens/EmailScreen';
import LoginScreen from './screens/LoginScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/email" element={<EmailScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
