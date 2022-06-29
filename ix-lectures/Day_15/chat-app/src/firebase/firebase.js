// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlpRtJuAmdoDf9yfX3nILxZa3Hdj3dGtc",
  authDomain: "ix-task-list-green.firebaseapp.com",
  projectId: "ix-task-list-green",
  storageBucket: "ix-task-list-green.appspot.com",
  messagingSenderId: "834546057377",
  appId: "1:834546057377:web:0e0b43a24d116eab5530e0",
  measurementId: "G-SPH3JLKQTZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {
  db,
  auth,
  storage
};
