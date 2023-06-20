import React from 'react';
import { Link } from 'react-router-dom';

export default function MoviesPage() {
  return (
    <div className="container my-4">
      <div className="d-flex justify-content-end">
        <Link to="/add-movie">Add Movie</Link>
      </div>
    </div>
  );
}
