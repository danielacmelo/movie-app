import Nav from "./Nav";
import cinemovieLogo from '../assets/cinemovieLogo.svg'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className="site-header">
        <Link to="/">
            <h1><  img className="logo" src={cinemovieLogo}  alt="Movie App Logo" /></h1>
        </Link>
        <Nav />
    </header>
  );
}

export default Header;
