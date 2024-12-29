import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Admin/Dashboard';
import Login from './pages/Admin/Login';
import About from './pages/Admin/About';
import Articles from './pages/Admin/Articles';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/about" element={<About />} />
        <Route path="/admin/articles" element={<Articles />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
