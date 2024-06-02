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
        <main>
            <section className="movie-detail"> 
                <h2 className="movie-detail-title">{movieDetails.title}</h2>
                <p className="movie-detail-date" >Release Date: {movieDetails.release_date}</p>
                <img className="movie-detail-poster" src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
                <p className="movie-detail-rating">Rating: {movieDetails.vote_average * 10}%</p>
                <h3>Overview</h3>
                <p className="movie-detail-overview">{movieDetails.overview}</p>
                <FavButton movie={movieDetails} isFav={isFavourite}  onClick={handleClick}  />
            </section>
        </main>
)};

export default MovieDetails;