import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Index from './pages';
import Recorder from './pages/recorder';
import Redirect from './pages/mac-recorder';

function App() {
  return (
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/recorder">Recorder</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/recorder" element={<Recorder />} />
          <Route path="/mac-recorder" element={<Redirect />} />
        </Routes>
      </Router>
  );
}

export default App;
