import React from 'react';
import { BrowserRouter as Router, Routes, Route, Form, } from "react-router-dom";
import { FoRegister } from './modules/HomeModule/pages/Form/Formmm';
import { FormLogin } from './modules/HomeModule/pages/FormLogin/FormLogin';
import { Login } from './modules/HomeModule/pages/FormLogin/Login';

const App: React.FC = () => (
  <>
    <Router>
        <Routes>
          <Route path="/" element={<FoRegister  />} />
          <Route path="login" element={<Login/>} />
          </Routes>
      </Router>
      
  </>
);

export default App;
