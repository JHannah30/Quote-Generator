import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import NavLogoLight from '../images/logo-black.png';
import NavLogoDark from '../images/logo-white.png';
import DarkModeIconBlack from '../images/dark-mode-black.png';
import DarkModeIconWhite from '../images/dark-mode-white.png';

const Navbar = ({ handleDarkMode, darkMode }) => {

    const [toggleActive, setToggleActive] = useState("home");

    return ( 
        <div className="navbar-container">
            <nav className={ darkMode ? "navbar-dark" : "navbar" }>
                <img src={ darkMode ? NavLogoDark : NavLogoLight } alt="" className="logo" />
                <div className="nav-links">
                    <Link 
                        to="/" 
                        onClick={() =>setToggleActive("home")} 
                        className={ toggleActive === "home" ? "navlink-active" : "navlink" }
                        >Home
                    </Link>
                    <Link 
                        to="/my-quotes" 
                        onClick={() => setToggleActive("myQuotes")} 
                        className={ toggleActive === "myQuotes" ? "navlink-active" : "navlink" }
                        >My Quotes
                    </Link>
                </div>
                <img 
                    className="dark-mode-icon" 
                    src={ darkMode ? DarkModeIconWhite : DarkModeIconBlack } 
                    alt="Toggle icon for dark/light mode" 
                    onClick={handleDarkMode}
                    />
            </nav>
        </div>
     );
}
 
export default Navbar;