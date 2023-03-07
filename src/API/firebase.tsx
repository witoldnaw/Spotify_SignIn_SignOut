import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBfxyUECh-6p2GPG9QkKgGfF9KbTMsoNCg",
  authDomain: "spotify-26a94.firebaseapp.com",
  projectId: "spotify-26a94",
  storageBucket: "spotify-26a94.appspot.com",
  messagingSenderId: "19499857658",
  appId: "1:19499857658:web:3c610f062883b9fbf63b43"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)