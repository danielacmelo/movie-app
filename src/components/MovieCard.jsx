import { Link } from 'react-router-dom';
import FavButton from './FavButton';
import { useDispatch } from 'react-redux';
import { addFav, removeFav } from '../features/favs/favSlice';

const MovieCard = ({ movieDetails, isFavourite }) => {
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
    <div className="movie-card">
        <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
        <h3>{movieDetails.title}</h3>
        <p>Release Date: {movieDetails.release_date}</p>
        <p>Rating: {movieDetails.vote_average * 10}%</p>
        <p>{movieDetails.overview}</p>
        <button>
        <Link to={`/movie/${movieDetails.id}`}>More Info</Link>
        </button>
        <FavButton movie={movieDetails} isFav={isFavourite} onClick={handleClick}  />
    </div>
)};

export default MovieCard;