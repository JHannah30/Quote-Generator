import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import NavLogo from '../images/logo-black.png';

const Navbar = () => {

    const [toggleActive, setToggleActive] = useState(null);

    useEffect(() => {
        console.log(`Testing: The current state is ${toggleActive}`)
    })

    return ( 
        <div className="navbar-container">
            <nav className="navbar">
                <img src={NavLogo} alt="" className="logo" />
                <div className="links">
                    <Link to="/" onClick={() =>setToggleActive("home")} className={toggleActive === "home" ? "navlink-active" : "navlink"}>Home</Link>
                    <Link to="/my-quotes" onClick={() => setToggleActive("myQuotes")} className={toggleActive === "myQuotes" ? "navlink-active" : "navlink"}>My Quotes</Link>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;