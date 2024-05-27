import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [visits, setVisits] = useState('0');

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home visits={visits} setVisits={setVisits} />} />
          <Route path="/about" element={<About visits={visits} />} />
          <Route path="/contact" element={<Contact visits={visits} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;