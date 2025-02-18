// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import SendMoney from './components/SendMoney';
import Balance from './components/Balance';
import Login from './components/Login';
import LanguageSwitcher from './components/LanguageSwitcher';
import Register from './components/Register'; // Import the Register component
import LandingPage from './components/LandingPage'
const App = () => {
  const [userId, setUserId] = useState(1); // Hardcoded user ID for now

  return (
    <Router>
      <div className="App">
        <LanguageSwitcher />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard userId={userId} />}/>
          <Route path="/balance" element={<Balance userId={userId} />} />
          <Route path="/deposit" element={<Deposit userId={userId} />} />
          <Route path="/withdraw" element={<Withdraw userId={userId} />} />
          <Route path="/send-money" element={<SendMoney userId={userId} />} />
          <Route path="/login" element={<Login onLogin={(id) => setUserId(id)} />} />
          <Route path="/register" element={<Register />} /> {/* Add Register route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
