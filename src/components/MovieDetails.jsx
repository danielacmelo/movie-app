import FavButton from "./FavButton";
import { useDispatch } from 'react-redux';
import { addFav, removeFav } from '../features/favs/favSlice';

const MovieDetails = ({ movieDetails, isFavourite }) => {
    const dispatch = useDispatch();
    const handleClick = (addToFav, movie) => {
        console.log(addToFav, movie);
        if (addToFav === true) {
            dispatch(addFav(movie));
        } else {
            dispatch(removeFav(movie));
        }
    }

    return (
        <div className="movie-details">
            <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
            <h3>{movieDetails.title}</h3>
            <p>Release Date: {movieDetails.release_date}</p>
            <p>Rating: {movieDetails.vote_average * 10}%</p>
            <p>{movieDetails.overview}</p>
            <FavButton movie={movieDetails} isFav={isFavourite}  onClick={handleClick}  />
        </div>
)};

export default MovieDetails;