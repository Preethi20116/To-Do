import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Ecom-website/Home';
import LoginPage from './Ecom-website/LoginPage';
import SignupPage from './Ecom-website/SignupPage';

import './App.css';
import Dashboard from './Ecom-website/Dashboard';


const App = () => (
  <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}  />
        <Route path="/login" element={<LoginPage></LoginPage>}  />
        <Route path='/signup' element={<SignupPage></SignupPage>} />
        <Route path='/dashboard' element={<Dashboard></Dashboard>} />
      
      </Routes>
    </div>
    <br/>
    
   
  </Router>
);

export default App;
