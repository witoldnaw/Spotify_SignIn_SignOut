import React, { useState } from "react";
import "./HomePage.scss";
import { Input } from "../../components/InputSignIn_Sign_Out";

const HomePage: React.FC = () => {

  interface Month {
    name: string;
    days: number;
  }

  const numberMonth:Month[] = [
    { name: "January", days: 31 },
    { name: "Febuary", days: 28 },
    { name: "March", days: 31 },
    { name: "April", days: 30 },
    { name: "May", days: 31 },
    { name: "June", days: 30 },
    { name: "July", days: 31 },
    { name: "August", days: 31 },
    { name: "September", days: 30 },
    { name: "October", days: 31 },
    { name: "November", days: 30 },
    { name: "December", days: 31 },
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
  const [selectGender, setSelectGender] = useState<string>()

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
    const inputValueDay = parseInt(event.target.value, 10);
    setSelectDay(inputValueDay);

    if ( inputValueDay > 31 || inputValueDay < 1) {
      setErrorMessage("Podaj prawidłowy dzień miesiąca");
    } else {
      setErrorMessage("");
    }
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValueYear = parseInt(event.target.value, 10);
    setSelectYear(event.target.value);

    if ( inputValueYear > 1900 || inputValueYear < 2020) {
      setErrorMessage("Podaj prawidłowy dzień miesiąca");
    } else {
      setErrorMessage("");
    }
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectGender(event.target.value)
  }

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
            <label htmlFor="selectMonth">Month</label>
            <select
              id="selectMonth"
              value={selectMonth}
              placeholder="months"
              onChange={handleMonthChange}
            >
              <option value="" disabled selected>
                Months
              </option>
              {numberMonth.map((month) => (
                <option key={month.name} value={month.name}>
                  {month.name}
                </option>
              ))}
              ;
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
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
            <label htmlFor="Year">
              Year
              <input
                type="number"
                value={selectYear}
                placeholder="YY"
                onChange={handleYearChange}
              />
            </label>

              <p>What is your gender?</p>
            <label>
              Male
              </label>
            <input 
            type="radio"
            value="Male"
            name="gender"
            checked={selectGender==="Male"}
            onChange={handleGenderChange}>
            </input>
            
            <label>
              Female
              </label>
            <input 
            type="radio"
            value="Female"
            name="gender"
            checked={selectGender==="Female"}
            onChange={handleGenderChange}>
            </input>

            <label>
              Non-binary
              </label>
            <input 
            type="radio"
            value="non-binary"
            name="gender"
            checked={selectGender==="non-binary"}
            onChange={handleGenderChange}>
            </input>

            <label>
              Other
              </label>
            <input 
            type="radio"
            value="Other"
            name="gender"
            checked={selectGender==="Other"}
            onChange={handleGenderChange}>
            </input>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
