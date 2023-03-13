import React, { FormEvent } from "react";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../../../API/firebase";
import { firebaseErrors } from "../../../../Utils/FirebaseErrors";
import { getFormData } from "../../../../Utils/getFormData";
import { useNavigate } from "react-router-dom";
import { FormLogin } from "./FormLogin";




export const Login = () => {
  const navigate = useNavigate();
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = getFormData(e);
    signInWithEmailAndPassword(auth, email, password)
      .then((jwt) => {
        if (e.target instanceof HTMLFormElement) {
          e.target.reset();
        }
        navigate("/");
      })
      .catch((e) => {
        console.dir(e);
        alert(firebaseErrors[e.code]);
      });
  };

  return (
    <>
      <FormLogin submitText="Sign up" onSubmit={handleLogin} isPasswordHidden />
    </>
  );
};