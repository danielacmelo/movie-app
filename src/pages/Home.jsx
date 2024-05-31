import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import Options from '../components/Options';


const Home = () => {

    const [movies, setMovies] = useState([]);
    const [option, setOption] = useState('popular');

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
    <div>
        <h1>Home</h1>
        <Options handleClick={handleClick} />
      
        {movies && movies.length > 0 && 
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}> <MovieCard movieDetails={movie} /></li>
                ))}
            </ul>
        }    
    </div>
  );
}

export default Home;