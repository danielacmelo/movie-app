import { NavLink } from "react-router-dom";

const Nav = () => (
    <nav className="siteNavegation">
        <ul>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/favourites">Favourites</NavLink></li>
        </ul> 
    </nav>   
)

export default Nav;