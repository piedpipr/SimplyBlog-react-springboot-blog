import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home';  
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
