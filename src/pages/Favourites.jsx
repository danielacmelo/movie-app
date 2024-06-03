import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import { useEffect } from 'react';
import { appTitle } from '../globals/globalVariables';
import { Link } from 'react-router-dom';
import heartIcon from '../assets/heartIcon.svg';

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
                        <ul className="movies-grid" >
                            {favs.map((movie) => (
                                <li key={movie.id}> <MovieCard movieDetails={movie} isFavourite={true} /></li>
                            ))}
                        </ul>
                    : 
                    <div className='no-favourites'>
                        <p>You have no favourite movies yet.</p>
                        <p>Get started by clicking the Add to Favourites button on the <Link to="/">Home</Link> page to add them to your favourites!</p>
                        <img className="heartIcon" src={heartIcon} alt="Heart Icon" />
                    </div>
                    }    
            </section>
        </main>
    );
}

export default Favourites;