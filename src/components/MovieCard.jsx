import { Link } from 'react-router-dom';
import FavButton from './FavButton';
import { useDispatch } from 'react-redux';
import { addFav, removeFav } from '../features/favs/favSlice';

const MovieCard = ({ movieDetails, isFavourite, displayOverview }) => {
    const dispatch = useDispatch();
    const handleClick = (addToFav, movie) => {
        console.log(addToFav, movie);
        if (addToFav === true) {
            dispatch(addFav(movie));
        } else {
            dispatch(removeFav(movie));
        }
    }

    const getFirstNWords = (inputString, count) => {
        const wordsArray = inputString.split(' ');
        const wordCount = wordsArray.length
        const first20Words = wordsArray.slice(0, count);
        let resultString = first20Words.join(' ');
        if(wordCount > count) {
            resultString += '...';
        }
        return resultString;
    }

    return (
    <div className="movie-card">
        <div>
            <img className="movie-card-image" src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.title} />
        </div>
       <div>
            <h2 className="movie-card-title" >{movieDetails.title}</h2>
        </div>
        <div>
            <p className="movie-card-date">Release Date: {movieDetails.release_date}</p>
        </div>
        <div>
            <p className="movie-card-rating" >Rating: {Math.round(movieDetails.vote_average * 10)}%</p>
        </div>
        {displayOverview && (<div>
            <p className='movie-card-overview' >{getFirstNWords(movieDetails.overview, 10)}</p>
        </div> )}
        <div>
            <button className="more-info-button">
            <Link to={`/movie/${movieDetails.id}`}>More Info</Link>
            </button>
        </div>
        <div>
            <FavButton movie={movieDetails} isFav={isFavourite} onClick={handleClick}  />
        </div>
    </div>
)};

export default MovieCard;