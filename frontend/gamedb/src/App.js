

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Replace Switch with Routes
import Main from './components/Main';
import Login from './components/Login'; // import the Login component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;