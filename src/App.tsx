import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Recorder from './pages/Recorder';
import Redirect from './pages/Redirect';

function App() {
  return (
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/recorder">Recorder</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recorder" element={<Recorder />} />
          <Route path="/mac-recorder" element={<Redirect />} />
        </Routes>
      </Router>
  );
}

export default App;
