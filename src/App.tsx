import React from 'react';
import { BrowserRouter as Router, Routes, Route, Form, } from "react-router-dom";
import { FoRegister } from './modules/HomeModule/pages/Form/Formmm';
import { FormLogin } from './modules/HomeModule/pages/FormLogin/FormLogin';
import { Login } from './modules/HomeModule/pages/FormLogin/Login';
import { UserHome } from './modules/HomeModule/pages/UserHome';

const App: React.FC = () => (
  <>
    <Router>
        <Routes>
          <Route path="register" element={<FoRegister  />} />
          <Route path="login" element={<Login/>} />
          <Route path="home" element={<UserHome/>} />
          </Routes>
      </Router>
      
  </>
);

export default App;
