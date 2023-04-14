import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FoRegister } from './modules/HomeModule/pages/Form/Formmm';
import { Login } from './modules/HomeModule/pages/FormLogin/Login';
import { UserHome } from './modules/HomeModule/pages/UserHome';
import { userDataContext, UserData } from './modules/HomeModule/components/Auth/UserDataContext';

const App: React.FC = () => {
  const userData: UserData = useContext(userDataContext);

  return (
    <userDataContext.Provider value={userData}>
      <Router>
        <Routes>
          <Route path="auth/register" element={<FoRegister />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="/" element={<UserHome userData={userData} />} />
        </Routes>
      </Router>
    </userDataContext.Provider>
  );
}

export default App;
