import React, { useEffect, useState } from 'react';

import MoviesList from './MoviesList';
import './App.css';

function MoviesApp() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    if(retryCount > 0){
      const timer = setTimeout(() => {
        fetchMoviesHandler()
      }, 3000);
      return (() => clearTimeout(timer))
    }
  }, [retryCount])
  
  const fetchMoviesHandler = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('https://swapi.dev/api/film');
      if (!response.ok){
        throw new Error('something went wrong...Retrying!')
      }
      const data = await response.json();
      const transMovies = data.results.map(movie => {
          return {
            id: movie.episode_id,
            title: movie.title,
            releaseDate: movie.release_date,
            openingText: movie.opening_crawl,

          }
        })
        setMovies(transMovies)
    } catch (error) {
      setError(error.message);
      setRetryCount((prev) => prev+1)
    }
    setIsLoading(false)
    }
    const cancelHandler = () => {
      setRetryCount(0)
      console.log('Stopped Fetching')
    }
      
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length >0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length ==0 && !error && <p>No Movies Found</p>}
        {isLoading && <p>Loading Data. Please wait...</p>}
        {!isLoading && error && <p>{error} {' '} 
          <button onClick={cancelHandler}>cancel Loading?</button>
        </p>}
      </section>
    </React.Fragment>
  );
}

export default MoviesApp;