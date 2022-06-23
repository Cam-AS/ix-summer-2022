import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<MovieList />} />
        <Route path='/add-movie' element={<AddMovie />} />
        <Route />
      </Routes>
    </BrowserRouter>
  )
}
