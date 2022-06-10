import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAafITjFr-h5H82ra03-EuKb8O2IEWSa8s',
  authDomain: 'recipe-app-393b3.firebaseapp.com',
  projectId: 'recipe-app-393b3',
  storageBucket: 'recipe-app-393b3.appspot.com',
  messagingSenderId: '617844506433',
  appId: '1:617844506433:web:b3ba461f942a6e7f5fabc0',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
