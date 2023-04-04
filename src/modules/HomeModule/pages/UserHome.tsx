import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../../API/firebase";
import { signOut } from "firebase/auth";

// const signOutReload = () => {
//   signOut(auth);
//   window.location.reload(true);
//   window.location = "http:/";
// };

interface UserHomeProps {
  userData: {
    status: string;
  };
}

export const UserHome = ({ userData }: UserHomeProps) => {
  return (
    <>
      <nav>
        <div>
          <div>
            {!userData && (
              <>
                <Link to="login">
                  <button>Zaloguj się</button>
                </Link>
                <Link to="register">
                  <button>Zarejestruj się</button>
                </Link>
              </>
            )}
            {userData.status === "user" && (
              <>
                <Link to="/">
                  {/* <button onClick={signOutReload}>Wyloguj się</button> */}
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

