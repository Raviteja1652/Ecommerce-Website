import React, { useCallback, useEffect, useState } from 'react';
import AddMovie from './AddMovie';

import MoviesList from './MoviesList';
import './App.css';

function MoviesApp() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('https://react-http-7e214-default-rtdb.firebaseio.com/movies.json');
      if (!response.ok){
        throw new Error('something went wrong...Retrying!')
      }
      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        })
      }
      
        setMovies(loadedMovies)
    } catch (error) {
      setError(error.message);
      setRetryCount((prev) => prev+1)
    }
    setIsLoading(false)
    }, []);

    useEffect(() => {
      fetchMoviesHandler()
      if(retryCount > 0){
        const timer = setTimeout(() => {
          fetchMoviesHandler()
        }, 3000);
        return (() => clearTimeout(timer))
      }
    }, [retryCount, fetchMoviesHandler]);

    const cancelHandler = () => {
      setRetryCount(0)
      console.log('Stopped Fetching')
    };

    async function addMovieHandler(movie) {
      const res = await fetch('https://react-http-7e214-default-rtdb.firebaseio.com/movies.json', {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json();
    };
      
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length >0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>No Movies Found</p>}
        {isLoading && <p>Loading Data. Please wait...</p>}
        {!isLoading && error && <p>{error} {' '} 
          <button onClick={cancelHandler}>cancel Loading?</button>
        </p>}
      </section>
    </React.Fragment>
  );
}

export default MoviesApp;