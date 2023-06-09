// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBmeWmBB_I-7fkw9xqUnmM4091INDQhZmM',
  authDomain: 'task-list-s1-2023-d389d.firebaseapp.com',
  projectId: 'task-list-s1-2023-d389d',
  storageBucket: 'task-list-s1-2023-d389d.appspot.com',
  messagingSenderId: '384655172005',
  appId: '1:384655172005:web:1544aaab6e65b7ac39884c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
