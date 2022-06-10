import React, { useState, useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { auth } from './firebase/firebase';

import { onAuthStateChanged } from 'firebase/auth';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import TaskPage from './components/tasks/TaskPage';

import { Recipe } from './models/Recipe';

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <BrowserRouter>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<TaskPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
