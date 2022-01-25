import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACkEnG1p0PZ-8zRFstZYf47lPgGCeYxvI",
  authDomain: "my-app-8054f.firebaseapp.com",
  projectId: "my-app-8054f",
  storageBucket: "my-app-8054f.appspot.com",
  messagingSenderId: "441813463936",
  appId: "1:441813463936:web:653b40430b071e9b9e0765",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export async function signup(email, password) {
  
  return (await createUserWithEmailAndPassword(auth, email, password));
}

export async function login(email, password) {
  return (await signInWithEmailAndPassword(auth, email, password));
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}
