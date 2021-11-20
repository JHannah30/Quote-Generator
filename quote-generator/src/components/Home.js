import './Home.css';
import { Link } from 'react-router-dom';

const Home = ({ quote, newQuote, darkMode }) => {

    return ( 
        <div className={ darkMode ? "home-dark" : "home" }>
            <section className="home-container">
                <div className="quote-action centered">
                    <button className="previous-quote">Previous Quote</button>
                </div>
                <div className="quote-body centered">
                    <h2 className="quote-text">'{quote.quote}'</h2>
                    <div className="quote-author">
                        <img className="author-image" src={quote.image} alt="Headshot of the quote's author" />
                        <Link to={quote.wiki} className="author-link">
                            <h4 className="author-name">~ {quote.author}</h4>
                        </Link>
                    </div>
                </div>
                <div className="quote-action centered">
                    <button className="next-quote" onClick={newQuote}>Next Quote</button>
                </div>
            </section>
        </div>
     );
}
 
export default Home;