import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase';

// import the bootstrap styles from node_modules folder
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Component imports
import Navbar from './components/common/Navbar';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import Spinner from './components/common/Spinner';
import ChatsPage from './components/chats/ChatsPage';
import RequireAuth from './components/common/RequireAuth';

// clean out template

// install packages
//  - bootstrap
//  - bootstrap-icons
//  - firebase
//  - react-router-dom

// import bootstrap css, js & icons int App.js
// verify import add className="text-center"

// create folders
//  - components
//    - auth
//    - chats
//    - common
//  - firebase
//  - models
//  - services

// add firebase.js
//  - import getFirestore, getAuth, getStorage
//  - export { db, auth, storage }

// add our NavBar from Day_10 & Update Brand
// Scaffold App Navigation
// add BrowserRouter, NavBar, Routes & Route
// add /, /register & /login routes
// add LoginPage
// add RegisterPage
// connect Route path & element

// update RegisterPage
// add name, surname, file, loading, error state variables
// add name & surname inputs

// add Alert component
// add Button component
// add Spinner component
// add RequireAuth component
// add ImageSelector component

// Add ImageSelector element to Register page
// possibly restart server

// create Profile Model
// import Profile to RegisterPage
// add Button and Alert to RegisterPage

// update onFormSubmit with setLoading
// add FileService
// import FileService to RegisterPage
// create ProfileService
// create saveProfile
// create fetchMyProfile
// create fetchProfiles
// import ProfileService to RegisterPage
// call saveProfile

// send user to NavBar
// add user, isUserSet state variables
// add useEffect to call onAuthStateChanged
// add Spinner while loading

// Add RequireAuth and ChatsPage
// restart server

// update LoginPage
// add loading & error state variables
// add Button and Alert
// call setLoading onFormSubmit
// update NavBar
// add d-flex flex-end, remove margin-auto

// Add our Chat components
// add AvailableChats
// add ChatMessages
// add ChatsSidebar
// add Chats.css

// Update ChatsPage
// import components to ChatsPage
// accept the user as props
// add profiles and chats state variables
// add fetchProfiles function and useEffect to subscribe to Chats

// add ChatService
// add Chat model
// update ChatsService
// add createChat
// add subscribeToUserChats

function App() {
  const [user, setUser] = useState(null);
  const [isUserSet, setIsUserSet] = useState(false);

  useEffect(() => {
    // returns unsubscribe function
    const unsub = onAuthStateChanged(
      auth,
      // takes in a callback when the user changes
      // gives you the current user state
      // ie: call this when the user changes
      (user) => {
        setUser(user);
        setIsUserSet(true);
      }
    );

    // call unsubscribe function (unsubscribe)
    return () => unsub();
  }, []);

  return (
    <BrowserRouter>
      <Navbar user={user} />
      {isUserSet ? (
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth user={user}>
                <ChatsPage user={user} />
              </RequireAuth>
            }
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      ) : (
        <div className="text-center m-4">
          <Spinner />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
