import { createUserWithEmailAndPassword, Auth } from "@firebase/auth";
import React, { FormEvent } from "react";
import { auth, db } from "../../../../API/firebase";
import { firebaseErrors } from "../../../../Utils/FirebaseErrors";
import { getFormData } from "../../../../Utils/getFormData";
import { doc, setDoc } from "firebase/firestore";
import { FormReg } from "./FormReg";
import { useState } from "react";


// interface FoRegisterProps {
//   setEmail: React.Dispatch<React.SetStateAction<string>>;
//   setPassword: React.Dispatch<React.SetStateAction<string>>;
//   setSelectMonth: React.Dispatch<React.SetStateAction<string>>;
//   setSelectDay: React.Dispatch<React.SetStateAction<number>>;
//   setSelectYear: React.Dispatch<React.SetStateAction<string>>;
// }

// { setEmail, 
//   setPassword, 
//   setSelectMonth, 
//   setSelectDay, 
//   setSelectYear}: FoRegisterProps

export const FoRegister = () => {

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    try {
      const { email, password, selectMonth, selectDay, selectYear} = getFormData(e);
      const jwt = await createUserWithEmailAndPassword(auth as Auth, email, password);
      const userData = { status: "user", email, selectDay, selectMonth, selectYear};
      const userRef = doc(db, "users", jwt.user.uid);
      e.preventDefault();
      await setDoc(userRef, {
        ...userData,
        id: jwt.user.uid,
      });
      setEmail("");
      setPassword("");
      setSelectMonth("");
      setSelectDay(0);
      setSelectYear("");
    } catch (error) {
      return firebaseErrors;
    }
  };
  return (
    <FormReg
      onSubmit={handleRegister} 
      submitText={"KLIKNIJ"}  
      />
  );
};
