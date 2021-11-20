import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import NavLogoLight from '../images/logo-black.png';
import NavLogoDark from '../images/logo-white.png';

const Navbar = ({handleDarkMode, darkMode}) => {

    const [toggleActive, setToggleActive] = useState("home");

    return ( 
        <div className="navbar-container">
            <nav className={ darkMode ? "navbar-dark" : "navbar" }>
                <img src={ darkMode ? NavLogoDark : NavLogoLight } alt="" className="logo" />
                <div className="nav-links">
                    <Link to="/" onClick={() =>setToggleActive("home")} className={ toggleActive === "home" ? "navlink-active" : "navlink" }>Home</Link>
                    <Link to="/my-quotes" onClick={() => setToggleActive("myQuotes")} className={ toggleActive === "myQuotes" ? "navlink-active" : "navlink" }>My Quotes</Link>
                    <button className="toggle-button" onClick={handleDarkMode}>D/L</button>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;