import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import NavLogo from '../images/logo-black.png';

const Navbar = ({handleDarkMode, toggleDark}) => {

    const [toggleActive, setToggleActive] = useState(null);

    return ( 
        <div className="navbar-container">
            <nav className={ toggleDark ? "navbar-dark" : "navbar" }>
                <img src={NavLogo} alt="" className="logo" />
                <div className="links">
                    <Link to="/" onClick={() =>setToggleActive("home")} className={ toggleActive === "home" ? "navlink-active" : "navlink" }>Home</Link>
                    <Link to="/my-quotes" onClick={() => setToggleActive("myQuotes")} className={ toggleActive === "myQuotes" ? "navlink-active" : "navlink" }>My Quotes</Link>
                    <button className="toggle-button" onClick={handleDarkMode}>D/L</button>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;