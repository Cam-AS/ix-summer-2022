import './App.css';
import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from './firebase/firebase';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TaskPage from './components/task/TaskPage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';

import Navbar from './components/common/Navbar';
import RequireAuth from './components/common/RequireAuth';
import Spinner from './components/common/Spinner';

function App() {
  const [user, setUser] = useState(null);
  const [isUserUpdated, setIsUserUpdated] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsUserUpdated(true);
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar user={user} />
      {isUserUpdated ? (
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth user={user}>
                <TaskPage user={user} />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      ) : (
        <div className="mt-3 text-center">
          <Spinner></Spinner>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
