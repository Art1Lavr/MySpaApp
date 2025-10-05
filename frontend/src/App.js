import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Greeting from './Greeting';
import About from './About';


function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', backgroundColor: '#eee' }}>
        <Link to="/" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/greeting" style={{ marginRight: 10 }}>Greeting</Link>
        <Link to="/about">About</Link>
      </nav>
      <div style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/greeting" element={<Greeting />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
