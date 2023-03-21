import React from 'react';
import { BrowserRouter as Router, Routes, Route, Form, } from "react-router-dom";
import { FoRegister } from './modules/HomeModule/pages/Form/Formmm';
import { FormLogin } from './modules/HomeModule/pages/FormLogin/FormLogin';
import { Login } from './modules/HomeModule/pages/FormLogin/Login';
import { UserHome } from './modules/HomeModule/pages/UserHome';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser, clearUser } from '../src/modules/HomeModule/components/Auth/AuthSlice';
import { auth } from '../src/API/firebase';


const App: React.FC = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(clearUser());
      }
    });

    return unsubscribe;
  }, [dispatch]);

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


