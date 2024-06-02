import Nav from "./Nav";
import cinemovieLogo from '../assets/cinemovieLogo.svg'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className="site-header">
        <Link to="/">
            <  img className="logo" src={cinemovieLogo}  alt="Movie App Logo" />
        </Link>
        <Nav />
    </header>
  );
}

export default Header;
