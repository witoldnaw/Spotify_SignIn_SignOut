import React from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";
import { db, auth } from "../../../../API/firebase"
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";

export const userDataContext = React.createContext<UserData>({
  userData: "",
});

type User = {
    id: string;
    name: string;
    email: string;
}
interface UserData {
  userData: string;
}

export const UserDataProvider = (props: { children: React.ReactNode }) => {
  const [userData, setUserData] = useState<string>("");
  const [role, setRole] = useState("user");
  const [user, setUser] = useState<User | null>(null);


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);

        onSnapshot(userRef, (userSnapshot) => {
          const data = userSnapshot.data()
          if (!data) {
            return;
          }

          setUser({ id: userSnapshot.id, name: data.name, email: data.email });
          setUserData({ id: userSnapshot.id, ...data });
          data.isAdmin ? setRole("admin") : setRole("user");
        });
      } else {
        setUser(null);
      }
    });
  }, []);
  

  return (
    <userDataContext.Provider value={{ userData }}>
      {props.children}
    </userDataContext.Provider>

    
  );
};
