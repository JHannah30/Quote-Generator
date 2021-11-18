import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return ( 
        <div className="navbar-container">
            <nav className="navbar">
                <h1>Quote Generator</h1>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/my-quotes">My Quotes</Link>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;