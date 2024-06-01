import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';

const Favourites = () => {
    const favs = useSelector((state) => state.favs.items);
    return (
        <div>
        <h1>Favourites</h1>
        {favs && favs.length > 0 ? 
                <ul>
                    {favs.map((movie) => (
                        <li key={movie.id}> <MovieCard movieDetails={movie} isFavourite={true} /></li>
                    ))}
                </ul>
            : <p>No favourites yet</p>}    
        </div>
    );
}

export default Favourites;