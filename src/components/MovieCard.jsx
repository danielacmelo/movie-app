import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movieDetails }) => (
  <div className="movie-card">
    <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
    <h3>{movieDetails.title}</h3>
    <p>Release Date: {movieDetails.release_date}</p>
    <p>Rating: {movieDetails.vote_average * 10}%</p>
    <p>{movieDetails.overview}</p>
    <button>
      <Link to={`/movie/${movieDetails.id}`}>More Info</Link>
    </button>
  </div>
);

export default MovieCard;