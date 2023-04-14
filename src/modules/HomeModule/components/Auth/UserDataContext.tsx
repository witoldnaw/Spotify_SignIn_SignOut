import React, { createContext, useState, useEffect } from "react";
import { db, auth } from "../../../../API/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";

export interface UserData {
  status: string;
}

export const userDataContext = createContext<UserData>({
  status: "",
});

export const UserDataProvider = (props: { children: React.ReactNode }) => {
  const [userData, setUserData] = useState<UserData>({ status: "" });
  const [role, setRole] = useState("user");
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);

        onSnapshot(userRef, (userSnapshot) => {
          const data = userSnapshot.data();
          if (!data) {
            setUserData({ status: "" }); // jesli nie znaleziono danych to ustawiamy status na pusty string
            return;
          }
          setUserData({ status: data.status }); // ustawiamy status na wartość pola "status" z dokumentu w Firestore
        });
      } else {
        setUserData({ status: "" });
      }
    });
  }, []);

  return (
    <userDataContext.Provider value={userData}>
      {props.children}
    </userDataContext.Provider>
  );
};
