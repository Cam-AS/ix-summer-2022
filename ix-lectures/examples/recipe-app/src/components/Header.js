import React from 'react';

import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';

import { signOut } from 'firebase/auth';

export default function Header(props) {
  const navigate = useNavigate();

  async function onLogout() {
    await signOut(auth);
    navigate('/login');
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {props.user ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <button onClick={onLogout} className="btn btn-outline-success" type="button">
                  Logout
                </button>
              </ul>
            ) : (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/register">
                    Register
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
