// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCrkc8TuT9oKrMgND2lnMGjdkUzcT4BwZ8',
  authDomain: 'task-list-s1-2023.firebaseapp.com',
  projectId: 'task-list-s1-2023',
  storageBucket: 'task-list-s1-2023.appspot.com',
  messagingSenderId: '941532034222',
  appId: '1:941532034222:web:4f7513b260ec30a0f5e93f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
