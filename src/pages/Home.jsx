import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import Options from '../components/Options';
import { useSelector } from 'react-redux';
import isFavourite from '../utilities/isFav';

const Home = () => {

    const [movies, setMovies] = useState([]);
    const [option, setOption] = useState('popular');

    const favs = useSelector((state) => state.favs.items);

    useEffect(() => {
        const apiKey = import.meta.env.VITE_MOVIEDB_API_KEY
        fetch(`https://api.themoviedb.org/3/movie/${option}?language=en-US&page=1&api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => setMovies(data.results) )
        .catch(error => console.log(error))
    }, [option])

    const handleClick = (selectedOption) => {
        setOption(selectedOption)
    }

    return (
    <main>    
        <section className="section-home">
            {/* <h1>Home</h1> */}
            <Options handleClick={handleClick} />
        
            {movies && movies.length > 0 && 
                <ul className="movie-card-home">
                    {movies.map((movie) => (
                        <li key={movie.id}> <MovieCard movieDetails={movie} isFavourite={isFavourite(favs, movie.id)} /></li>
                    ))}
                </ul>
            }    
        </section>
    </main>
  );
}

export default Home;