import tmdbLogo from '../assets/tmdbLogo.svg';

const About = () => {
  return (
    <div>
      <h2>Welcome to CineMovie</h2>
      <p>CineMovie is your go-to destination for discovering the latest, greatest, and most beloved films. Dive into our extensive movie database, where you can explore popular picks, top-rated classics, now playing, and upcoming releases.</p>
      <p>Create your own personalized watchlist and keep track of the films you love, easily revisiting them whenever you want.</p>
      <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
      <img className="tmdbLogo" src={tmdbLogo} alt="TMDb Logo" />
    </div>
  );
}

export default About;