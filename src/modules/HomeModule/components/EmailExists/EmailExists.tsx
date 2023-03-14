

import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { FormReg } from '../../pages/Form/FormReg';

const checkIfEmailExists = async (email: string): Promise<boolean> => {
  try {
    const providers = await firebase.auth().fetchSignInMethodsForEmail(email);
    if (providers.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};


export default checkIfEmailExists;
