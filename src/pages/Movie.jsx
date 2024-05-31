import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails';

const Movie = () => {
    
    const [movie, setMovie] = useState(false);

    const apiKey = import.meta.env.VITE_MOVIEDB_API_KEY;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => setMovie(data) )
        .catch(error => console.log(error))
    }, [])


    let { id } = useParams();
    console.log(id);

  return (
    <div>
      <h1>Movie</h1>
        {movie && 
            <MovieDetails movieDetails={movie} />
        }
    </div>
  );
}

export default Movie;