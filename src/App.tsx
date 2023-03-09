import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { FoRegister } from './modules/HomeModule/pages/Form/Formmm';

const App: React.FC = () => (
  <>
    <Router>
        <Routes>
          <Route path="/" element={<FoRegister />} />
          </Routes>
      </Router>
  </>
);

export default App;
