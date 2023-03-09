import { createUserWithEmailAndPassword, Auth } from "@firebase/auth";
import React, { FormEvent } from "react";
import { auth, db } from "../../../../API/firebase";
import { firebaseErrors } from "../../../../Utils/FirebaseErrors";
import { getFormData } from "../../../../Utils/getFormData";
import { doc, setDoc } from "firebase/firestore";
import { FormReg } from "./FormReg";
import { useState } from "react";


export const FoRegister = () => {

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    try {
      const { email, password, name, surname, description } = getFormData(e);
      const jwt = await createUserWithEmailAndPassword(auth as Auth, email, password);
      const userData = { status: "user", email};
      const userRef = doc(db, "users", jwt.user.uid);
      e.preventDefault();
      await setDoc(userRef, {
        ...userData,
        id: jwt.user.uid,
      });
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
