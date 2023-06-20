import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MoviesPage from './components/MoviesPage';
import AddMoviePage from './components/AddMoviePage';

import 'bootstrap/dist/css/bootstrap.min.css';

// unlock storage on Firebase

// install bootstrap
// install firebase
// install react-router-dom

// create components folder
// create firebase folder
// create models folder
// create services folder

// scaffold AddMoviePage component
// scaffold MoviesPage component
// scaffold MoviesPage CSS

// create firebase file
// copy over previous file and add storage

// scaffold Movie model

// scaffold file service
// scaffold movie service

// setup routing between pages
// create Movie Model
// update the AddMoviesPage
// update our file service
// update Movie service
// update our AddMoviesPage

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesPage />}></Route>
        <Route path="/add-movie" element={<AddMoviePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
