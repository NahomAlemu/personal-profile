import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import AboutPage from './Components/AboutPage';
import PortfolioPage from './Components/PortfolioPage';
import ContactPage from './Components/ContactPage';
import Profile from './Components/Profile';
import Hobbies from './Components/Hobbies';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<><Profile /><Hobbies /></>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
