import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../firebase/firebase';

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function navToRegister() {
    navigate('/register');
  }

  async function onLoginClicked(e) {
    e.preventDefault();

    if (email === '' || password === '') {
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container my-5">
      <div className="card card-body p-4 m-5">
        <h3>Login to Recipe App</h3>
        <hr></hr>
        <form onSubmit={onLoginClicked}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              className="form-control"
              id="password"
              placeholder="Enter your password"
            ></input>
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary px-5 me-1">
              Login
            </button>
            <button type="button" className="btn btn-primary px-5 ms-1" onClick={navToRegister}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
