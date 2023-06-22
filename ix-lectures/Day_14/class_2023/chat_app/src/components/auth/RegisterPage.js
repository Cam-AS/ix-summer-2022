import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import ImageSelector from '../common/ImageSelector';
import Button from '../common/Button';
import Alert from '../common/Alert';

import { auth } from '../../firebase/firebase';
import FileService from '../../services/file.service';
import ProfileService from '../../services/profile.service';

import { Profile } from '../../models/Profile';

export default function RegisterPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function onFormSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // upload file and get download Url
      const downloadUrl = await FileService.uploadImage(file);

      // create user profile with user details
      await ProfileService.saveProfile(
        new Profile({
          id: userCred.user.uid,
          name: name,
          surname,
          surname,
          imageUrl: downloadUrl,
        })
      );

      navigate('/');
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  }

  return (
    <div className="container my-4">
      <div className="card card-body">
        <h1>Register</h1>

        <form onSubmit={onFormSubmit}>
          <ImageSelector
            title="Profile Picture"
            onFileChange={(file) => setFile(file)}
          />

          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Surname</label>
            <input
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              type="text"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
            />
          </div>

          <div className="d-flex justify-content-end mt-4">
            <Button loading={loading} className="px-5">
              Register
            </Button>
          </div>
        </form>

        <Alert className="mt-3" show={error} onClose={() => setError('')}>
          {error}
        </Alert>
      </div>
    </div>
  );
}
