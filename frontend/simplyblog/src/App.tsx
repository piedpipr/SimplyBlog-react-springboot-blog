import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home';  
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
    </Router>
  );
}

export default App;
