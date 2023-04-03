import React from 'react';
import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FoRegister } from './modules/HomeModule/pages/Form/Formmm';
import { Login } from './modules/HomeModule/pages/FormLogin/Login';
import { UserHome } from './modules/HomeModule/pages/UserHome';
import { userDataContext } from './modules/HomeModule/components/Auth/UserDataContext';


const App: React.FC = () => {
  const { userData } = useContext(userDataContext);

// ZROBIĆ kompinent wykorzytujsacy useContext np. Navigation i sprawdzić czy dzial zalogowany i nie zalogowany
  return (
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
}

export default App;


