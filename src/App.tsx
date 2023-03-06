import React from 'react';
import HomePage from './modules/HomeModule/pages/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => (
  <>
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          </Routes>
      </Router>
  </>
);

export default App;
