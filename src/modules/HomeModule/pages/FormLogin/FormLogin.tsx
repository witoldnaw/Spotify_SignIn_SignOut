import React, { FormEvent } from "react";
import { Link } from "react-router-dom";

interface PropsLogin {
  submitText: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isPasswordHidden: boolean;
}

export const FormLogin = ({ submitText, onSubmit }: PropsLogin) => (
  <div>
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="email">E-mail:</label>
        <input type="email" name="email" id="email" />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" />
      </div>

      <Link to="przypomnijhaslo">
        <div>
          <p>Do not you remember the password?</p>
        </div>
      </Link>
      <div>
        <button>{submitText}</button>
      </div>
      <input type="checkbox"></input>
      <label>Remember me</label>
    </form>

    <p>You dont have an account yet?</p>
    <button>Sign up for Spotify</button>
  </div>
);
