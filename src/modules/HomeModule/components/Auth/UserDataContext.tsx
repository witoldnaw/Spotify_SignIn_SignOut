import React from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";
import { db, auth } from "../../../../API/firebase"
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";

export const userDataContext = createContext<unknown>(undefined);

type User = {
    id: string;
    name: string;
    email: string;
}

export const UserDataProvider = (props: { children: React.ReactNode }) => {
  const [userData, setUserData] = useState<unknown>(undefined);
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

        //   setUser(user);
          setUserData({ id: userSnapshot.id, ...data });
          data.isAdmin ? setRole("admin") : setRole("user");
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <userDataContext.Provider value={{ role, user, setUser, userData }}>
      {props.children}
    </userDataContext.Provider>
  );
};
