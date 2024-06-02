import Nav from "./Nav";
import cinemovieLogo from '../assets/cinemovieLogo.svg'

const Header = () => {
  return (
    <header className="siteHeader">
        <img className="logo" src={cinemovieLogo}  alt="Movie App Logo" />
        <Nav />
    </header>
  );
}

export default Header;