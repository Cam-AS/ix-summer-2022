import {
  collection,
  query,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';

import { db } from '../firebase/firebase';
import { Movie } from '../models/Movie';

class MoviesService {
  constructor() {
    this.collection = 'movies';
  }

  async createMovie(movie) {
    const collectionRef = collection(db, this.collection);
    const docRef = await addDoc(collectionRef, movie.toJson());

    movie.id = docRef.id;
    return movie;
  }

  async fetchMovies() {
    const collectionRef = collection(db, this.collection);
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const movies = [];

    querySnapshot.forEach((docSnap) => {
      movies.push(Movie.fromFirebase(docSnap));
    });

    return movies;
  }

  async deleteMovie(movieId) {
    const docRef = doc(db, this.collection, movieId);
    await deleteDoc(docRef);
  }
}

const service = new MoviesService();
export default service;
