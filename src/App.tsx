import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Index from './pages';
import Recorder from './pages/recorder';
import Redirect from './pages/mac-recorder';
import SupportForm from "./pages/support-form";

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/report-bugs">Report Bugs</Link>
                <Link to="/request-feature">Request Feature</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/report-bugs" element={<Recorder />} />
                <Route path="/request-feature" element={<Recorder />} />
                <Route path="/faq" element={<Recorder/>}/>
                <Route path="/support" element={<SupportForm/>}/>
                <Route path="/premium" element={<Recorder/>}/>
                <Route path="/downloads" element={<Recorder/>}/>
                <Route path="/releases" element={<Recorder/>}/>
                <Route path="/recorder" element={<Recorder/>}/>
                <Route path="/mac-recorder" element={<Redirect/>}/>
            </Routes>
        </Router>
    );
}

export default App;
