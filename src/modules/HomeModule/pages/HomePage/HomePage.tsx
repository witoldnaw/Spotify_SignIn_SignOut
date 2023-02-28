import React, { useState } from "react";
import "./HomePage.scss";
import { Input, InputProps } from "../../components/InputSignIn_Sign_Out";
import { StringifyOptions } from "querystring";

const HomePage: React.FC = () => {

  const [email, setEmail] = useState("")


  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };


  return (
    <>
  <h3>Spotify</h3>
  
  <h1>Sign up for free to start
  listening.</h1>
  
  <label htmlFor="email">
    Whats your email?
  <Input value={email} placeholder="enter your email." onChange={handleEmailChange}/>
  </label>
  </>
  )
};

export default HomePage