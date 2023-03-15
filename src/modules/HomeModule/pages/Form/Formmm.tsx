import { createUserWithEmailAndPassword, Auth } from "@firebase/auth";
import React, { FormEvent, useState } from "react";
import { auth, db } from "../../../../API/firebase";
import { firebaseErrors } from "../../../../Utils/FirebaseErrors";
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
      const { email, password, confirmEmail, name, selectMonth, selectDay, selectYear, gender } = e.target.elements;
      if (email.value !== confirmEmail.value) {
        throw new Error("Adres e-mail i jego potwierdzenie muszą być takie same");
      }
      const emailExists = await checkEmailExists(email.value);
      if (emailExists) {
        throw new Error("Podany adres e-mail już istnieje w bazie danych");
      }
      const jwt = await createUserWithEmailAndPassword(auth as Auth, email.value, password.value);
      const userData = { status: "user", email: email.value, name: name.value, selectDay: selectDay.value, selectMonth: selectMonth.value, selectYear: selectYear.value, gender: gender.value };
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





// PORWNUJE EMAIL DO CONFIRM EMAIL !!!! 