import React, { FormEvent } from "react";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth, db } from "../../../../API/firebase";
import { firebaseErrors } from "../../../../Utils/FirebaseErrors";
import { getFormData } from "../../../../Utils/getFormData";
import { doc, setDoc } from "firebase/firestore";
import HomePage from "../HomePage/HomePage";


export const Register = () => {
    
  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    try {
      const { email, password } = getFormData(e);
      const jwt = await createUserWithEmailAndPassword(auth, email, password);
      const userData = { email };
      const userRef = doc(db, "users", jwt.user.uid);
      e.preventDefault();
      await setDoc(userRef, {
        ...userData,
        id: jwt.user.uid,
      });
    } catch (error) {
      return firebaseErrors
    }
  };
  return (
    <>
    <HomePage
      submitText="SignUp"
      Submit={handleRegister}
    />
    </>
  );
};
