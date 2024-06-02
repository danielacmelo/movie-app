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
        <img className="movie-card-poster" src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
        <h2 className="movie-card-title" >{movieDetails.title}</h2>
        <p className="movie-card-date">Release Date: {movieDetails.release_date}</p>
        <p className="movie-card-rating" >Rating: {movieDetails.vote_average * 10}%</p>
        {/* <p className='movie-card-overview' >{movieDetails.overview}</p> */}
        <button className="more-info-button">
        <Link to={`/movie/${movieDetails.id}`}>More Info</Link>
        </button>
        <FavButton movie={movieDetails} isFav={isFavourite} onClick={handleClick}  />
    </div>
)};

export default MovieCard;