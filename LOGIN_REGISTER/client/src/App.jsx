import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import HomePage from './HomePage';
import AddGym from './AddGymPage';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />    
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/addgym" element={<AddGym />} />
        </Routes>
    </Router>
);
}

export default App