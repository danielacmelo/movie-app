import Nav from "./Nav";
import cinemovieLogo from '../assets/cinemovieLogo.svg'

const Header = () => {
  return (
    <header className="site-header">
        <img className="logo" src={cinemovieLogo}  alt="Movie App Logo" />
        <Nav />
    </header>
  );
}

export default Header;
