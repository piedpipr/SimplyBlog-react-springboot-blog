import React from 'react';
import './App.css';
import AppRoutes from './components/routes';
import Navbar from './components/navbar';
import Register from './components/register';

function App() {
  return (
    <div>
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
