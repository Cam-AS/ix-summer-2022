import { collection, query, getDocs, addDoc } from 'firebase/firestore';

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

    const querySnapshot = await getDocs(query(collectionRef));
    const movies = [];

    querySnapshot.forEach((doc) => {
      movies.push(Movie.fromFirebase(doc));
    });

    return movies;
  }
}

const service = new MoviesService();
export default service;
