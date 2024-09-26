import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';

// Import components
import Home from './componenets/Home';
import Login from './componenets/Login';
import Register from './componenets/Register';
import Dashboard from './componenets/Dashboard';
import FileClaim from './componenets/FileClaim';
import ClaimStatus from './componenets/ClaimStatus';

const App = () => {
  const [user, setUser] = useState(null);

  const logout = () => {
    axios.post('http://localhost:5000/logout')
      .then(() => {
        setUser(null);
      })
      .catch(error => console.error('Logout failed', error));
  };

  return (
    <Router>
      <div className="App min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex justify-center items-center p-4">
        <div className="w-full max-w-md">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register setUser={setUser} />} />
            <Route 
              path="/dashboard" 
              element={user ? <Dashboard user={user} logout={logout} /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/file-claim" 
              element={user ? <FileClaim user={user} /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/claim-status" 
              element={user ? <ClaimStatus user={user} /> : <Navigate to="/login" />} 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;