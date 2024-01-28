<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
=======
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
>>>>>>> 47ded0e31e9194084eb1e21ad0284377c490967a
