import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../../API/firebase";
import { signOut } from "firebase/auth";

// const signOutReload = () => {
//   signOut(auth);
//   window.location.reload(true);
//   window.location = "http:/";
// };

export interface UserHomeProps {
  userData: {
    status: string;
  };
}

export const UserHome: React.FC<UserHomeProps> = ({ userData }) => {
  console.log(userData)
  return (
    <>
      <nav>
        <div>
          <div>
            {!userData && (
              <>
                <Link to="auth/login">
                  <button>Zaloguj się</button>
                </Link>
                <Link to="auth/register">
                  <button>Zarejestruj się</button>
                </Link>
              </>
            )}
            {userData && userData.status === "user" && (
              <>
                <Link to="auth/register">
                  <button>Kliknij</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
