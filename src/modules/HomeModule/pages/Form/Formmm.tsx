import { createUserWithEmailAndPassword, Auth } from "@firebase/auth";
import React, { FormEvent, useState } from "react";
import { auth, db } from "../../../../API/firebase";
import { firebaseErrors } from "../../../../Utils/FirebaseErrors";
import { getFormData } from "../../../../Utils/getFormData";
import { doc, setDoc } from "firebase/firestore";
import { FormReg } from "./FormReg";
import { collection, query, where, getDocs } from "firebase/firestore";


export const FoRegister = () => {
  const [error, setError] = useState<string | null>(null);

  const checkEmailExists = async (email: string): Promise<boolean> => {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  };

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { email, password, selectMonth, selectDay, selectYear } = getFormData(e);
      const emailExists = await checkEmailExists(email);
      if (emailExists) {
        throw new Error("Podany adres e-mail już istnieje w bazie danych");
      }
      const jwt = await createUserWithEmailAndPassword(auth as Auth, email, password);
      const userData = { status: "user", email, selectDay, selectMonth, selectYear };
      const userRef = doc(db, "users", jwt.user.uid);
      await setDoc(userRef, {
        ...userData,
        id: jwt.user.uid,
      });
    } catch (error) {
      console.error(error);
      if (error.code === "auth/email-already-in-use") {
        setError("Podany adres e-mail już istnieje w bazie danych");
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <>
      {error && <h1>{error}</h1>}
      <FormReg onSubmit={handleRegister} submitText={"KLIKNIJ"} />
    </>
  );
};
