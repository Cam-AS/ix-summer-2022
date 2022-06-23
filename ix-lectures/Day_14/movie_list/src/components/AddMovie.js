import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { Movie } from '../models/movie';

import FileService from '../services/file.service';
import MovieService from '../services/movie.service';
import ImageSelector from './ImageSelector';

export default function AddMovie() {

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);

  async function onFormSubmit(e) {
    e.preventDefault();

    try {
      const downloadUrl = await uploadFile();

      await MovieService.createMovie(new Movie({
        id: null,
        name: name,
        downloadUrl: downloadUrl,
      }));

      navigate('/');
    } catch (err) {
      // TODO handle this
    }
  }

  async function uploadFile() {
    return FileService.uploadImage(file, (progress) => {
      console.log(progress);
    });
  }



  return (
    <div className='container my-4'>
      <div className='d-flex justify-content-end mb-3'>
        <Link to='/'>Movie List</Link>
      </div>

      <div className='card card-body'>

        <h1>Add Movie</h1>

        <form onSubmit={onFormSubmit}>

          <ImageSelector
            onFileChange={(file) => setFile(file)}
            title="Movie Image"
          />

          <div className="mb-3">
            <label className="form-label">
              Movie Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>

          <div className='text-center'>
            <button type='submit' className='btn btn-primary px-5'>
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}







