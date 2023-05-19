import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './Components/RegisterPage';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';
import LogoutButton from './Components/LogoutButton';
import './App.css';

function App() {
  return (
    
      <Routes>
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/home" component={LogoutButton} />
      </Routes>
    
  );
}

export default App;
