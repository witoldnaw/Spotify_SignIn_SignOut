import React, { useState, ChangeEventHandler } from "react";
import "./HomePage.scss";
import { Input } from "../../components/InputSignIn_Sign_Out";
import { StringifyOptions } from "querystring";
import { LargeNumberLike } from "crypto";

const HomePage: React.FC = () => {
  const numberMonth = [
    "",
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilName, setProfilName] = useState("");
  const [selectMonth, setSelectMonth] = useState("");
  const [selectDay, setSelectDay] = useState<number>();
  const [selectYear, setSelectYear] = useState("");
  const [minDayValue, setMinDayValue] = useState(1);
  const [maxDayValue, setMaxDayValue] = useState(31);
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleConfirmEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleProfilNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProfilName(event.target.value);
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectMonth(event.target.value);
  };

  const handleDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(event.target.value, 10);
    setSelectDay(inputValue);
  
    if (inputValue > 31) {
      setErrorMessage("Max value is 31");
    }
      else {
        setErrorMessage("");
      }
    } 
  

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectYear(event.target.value);
  };

  return (
    <>
      <section>
        <h3>Spotify</h3>

        <h1>Sign up for free to start listening.</h1>

        <div className="signUp_wrapper">
          <label htmlFor="email">
            Whats your email?
            <Input
              type="email"
              value={email}
              placeholder="Enter your email."
              onChange={handleEmailChange}
            />
          </label>

          <label htmlFor="confirmEmail">
            Confirm your email?
            <Input
              type="email"
              value={confirmEmail}
              placeholder="Confirm your email."
              onChange={handleConfirmEmailChange}
            />
          </label>

          <label htmlFor="password">
            Create a password
            <Input
              type="password"
              value={password}
              placeholder="Create a password."
              onChange={handlePasswordChange}
            />
          </label>

          <label htmlFor="profilName">
            What should we call you?
            <Input
              type="text"
              value={profilName}
              placeholder="Enter a profil name."
              onChange={handleProfilNameChange}
            />
          </label>
          <p>This appears on your profile.</p>
        </div>
        <div className="dateOfBirth">
          <p>What’s your date of birth</p>
          <div className="input_date">
            <label htmlFor="selectMonth">month</label>
            <select
              id="selectMonth"
              value={selectMonth}
              onChange={handleMonthChange}
            >
              {numberMonth.map((month) => {
                return (
                  <option key="select month" value={month}>
                    {month}
                  </option>
                );
              })}
            </select>
            <label htmlFor="Day">
            Day
            <input
              type="number"
              min={minDayValue}
              max={maxDayValue}
              value={selectDay}
              placeholder="DD"
              onChange={handleDayChange}
            />
          </label>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <label htmlFor="Year">
            Year
            <input
              type="number"
              min={minDayValue}
              max={maxDayValue}
              value={selectYear}
              placeholder="YY"
              onChange={handleYearChange}
            />
          </label>

          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
