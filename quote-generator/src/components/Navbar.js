import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import NavLogoLight from '../images/logo-black.png';
import NavLogoDark from '../images/logo-white.png';
import DarkModeIconBlack from '../images/dark-mode-black.png';
import DarkModeIconWhite from '../images/dark-mode-white.png';

const Navbar = ({ handleDarkMode, darkMode }) => {

    const { pathname } = useLocation();
    const [toggleActive, setToggleActive] = useState(pathname);

    // useEffect(() => {
    //     console.log(pathname)
    // }, [toggleActive])

    return ( 
        <div className="navbar-container">
            <nav className={ darkMode ? "navbar-dark" : "navbar" }>
                <img src={ darkMode ? NavLogoDark : NavLogoLight } alt="" className="logo" />
                <div className="nav-links">
                    <Link 
                        to="/" 
                        onClick={() => setToggleActive("/")} 
                        className={ toggleActive === "/" ? "navlink-active" : "navlink" }
                        >Home
                    </Link>
                    <Link 
                        to="/my-quotes" 
                        onClick={() => setToggleActive("/my-quotes")} 
                        className={ toggleActive === "/my-quotes" ? "navlink-active" : "navlink" }
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