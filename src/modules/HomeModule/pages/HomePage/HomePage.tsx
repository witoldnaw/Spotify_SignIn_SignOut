import React, { useState } from "react";
import "./HomePage.scss";
import { Input, InputProps } from "../../components/InputSignIn_Sign_Out";
import { StringifyOptions } from "querystring";

const HomePage: React.FC = () => {

  const [email, setEmail] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")
  const [password, setPassword] = useState("")
  const [profilName, setProfilName] = useState("")
  const [month, setMonth] = useState("")


  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleConfirmEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleProfilNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfilName(event.target.value);
  };

  const handlerMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value);
  };

  return (
    <>
  <h3>Spotify</h3>
  
  <h1>Sign up for free to start
  listening.</h1>
  
  <div className="signUp_wrapper">
  <label htmlFor="email">
    Whats your email?
  <Input type="email" value={email} placeholder="Enter your email." onChange={handleEmailChange}/>
  </label>

  <label htmlFor="confirmEmail">
    Confirm your email?
  <Input type="email" value={confirmEmail} placeholder="Confirm your email." onChange={handleConfirmEmailChange}/>
  </label>

  <label htmlFor="password">
    Create a password
  <Input type="password" value={password} placeholder="Create a password." onChange={handlePasswordChange}/>
  </label>

  <label htmlFor="profilName">
    What should we call you?
  <Input type="text" value={profilName} placeholder="Enter a profil name." onChange={handleProfilNameChange}/>
  </label>
  <p>This appears on your profile.</p>
  </div>
  <div className="dateOfBirth">
  <p>What’s your date of birth</p>
  <div className="input_date">
    <p>month</p>
    <select>
      
    </select>
    <Input type="radio" value={month} placeholder="Month" onChange={handlerMonthChange}/>
  </div>
  </div>
  </>
  )
};

export default HomePage