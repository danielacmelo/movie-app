import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import { useEffect } from 'react';
import { appTitle } from '../globals/globalVariables';
import { Link } from 'react-router-dom';

const Favourites = () => {
    const favs = useSelector((state) => state.favs.items);

    useEffect(() => {
		document.title = `${appTitle} - Favourites`;
	}, []);

    return (
        <main>
            <section className="section-favourites">
                <h2> Your Favourites</h2>
                {favs && favs.length > 0 ? 
                        <ul className="movie-card-favourites" >
                            {favs.map((movie) => (
                                <li key={movie.id}> <MovieCard movieDetails={movie} isFavourite={true} /></li>
                            ))}
                        </ul>
                    : 
                    <div>
                        <p>You have no favourite movies yet.</p>
                        <p>Get started by clicking the heart icon on the movie on the <Link to="/">Home</Link> to add them to your favorites!</p>
                    </div>
                    }    
            </section>
        </main>
    );
}

export default Favourites;