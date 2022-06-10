import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../firebase/firebase';

export default function Register() {
  let navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function onRegisterClicked(e) {
    e.preventDefault();

    if (email === '' || password === '') {
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential.user);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container">
      <div className="card card-body p-4 m-5">
        <h3>Register for Recipe App</h3>
        <hr></hr>
        <form onSubmit={onRegisterClicked}>
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
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
