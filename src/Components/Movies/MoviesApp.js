import React, { useState } from 'react';

import MoviesList from './MoviesList';
import './App.css';

function MoviesApp() {
  const [movies, setMovies] = useState([])
  async function fetchMoviesHandler () {
    const response = await fetch('https://swapi.dev/api/films');
    const data = await response.json();
    const transMovies = data.results.map(movie => {
        return {
          id: movie.episode_id,
          title: movie.title,
          releaseDate: movie.release_date,
          openingText: movie.opening_crawl,

        }
      })
      setMovies(transMovies)}
  

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default MoviesApp;