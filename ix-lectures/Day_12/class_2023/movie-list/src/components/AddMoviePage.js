import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import FileService from '../services/file.service';
import MoviesService from '../services/movies.service';

import { Movie } from '../models/Movie';

export default function AddMoviePage() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [file, setFile] = useState(null);

  async function onFormSubmit(e) {
    e.preventDefault();

    try {
      // upload the file
      const downloadUrl = await FileService.uploadImage(file, (progress) => {
        console.log('Upload Progress: ', progress);
      });

      // save the movie to firebase
      await MoviesService.createMovie(
        new Movie({
          id: null,
          name: name,
          downloadUrl: downloadUrl,
        })
      );

      navigate('/');
    } catch (err) {
      // setError(err.message);
    }
  }

  function onFileSelected(e) {
    if (e.target.files.length) {
      setFile(e.target.files[0]);
    } else {
      setFile(null);
    }
  }

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-end">
        <Link to="/">Movie List</Link>
      </div>

      <div className="container my-5">
        <div className="card card-body">
          <h1>Add Movie</h1>

          <form onSubmit={onFormSubmit}>
            <div className="mb-3">
              <label className="form-label">Movie Cover Image</label>
              <input
                onChange={onFileSelected}
                type="file"
                className="form-control"
                multiple
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Movie Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary px-5">
                Add Movie
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
