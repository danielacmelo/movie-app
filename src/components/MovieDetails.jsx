const MovieDetails = ({ movieDetails }) => (
  <div className="movie-details">
    <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
    <h3>{movieDetails.title}</h3>
    <p>Release Date: {movieDetails.release_date}</p>
    <p>Rating: {movieDetails.vote_average * 10}%</p>
    <p>{movieDetails.overview}</p>
  </div>
);

export default MovieDetails;