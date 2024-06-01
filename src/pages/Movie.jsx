import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails';
import { useSelector } from 'react-redux';
import isFavourite from '../utilities/isFav';


const Movie = () => {
    
    const favs = useSelector((state) => state.favs.items);

    const [movie, setMovie] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        const apiKey = import.meta.env.VITE_MOVIEDB_API_KEY;
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => setMovie(data) )
        .catch(error => console.log(error))
    }, [id])

  return (
    <div>
      <h1>Movie</h1>
        {movie && 
            <MovieDetails movieDetails={movie} isFavourite={isFavourite(favs, movie.id)} />
        }
    </div>
  );
}

export default Movie;