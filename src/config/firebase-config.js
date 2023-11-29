// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2tTqTgZ5PgGiLhTli_z5qSF2NFv9XV8k",
  authDomain: "expense-tracker-d42cb.firebaseapp.com",
  projectId: "expense-tracker-d42cb",
  storageBucket: "expense-tracker-d42cb.appspot.com",
  messagingSenderId: "764858156964",
  appId: "1:764858156964:web:addf1b505fc57599f9e331",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
