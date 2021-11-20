import './Home.css';

const Home = ({ quote, newQuote, darkMode }) => {


    const handleClick = () => {
        console.log(`test`);
    }

    return ( 
        <div className={ darkMode ? "home-dark" : "home" }>
            <section className="quote-body centered">
                <h2 className="quote-text">'{quote.quote}'</h2>
                <div className="author-body">
                    <a href={quote.wiki} className="author-link">
                        <img className="author-image" src={quote.image} alt="Headshot of the quote's author" />
                        <h4 className="author-name">{quote.author}</h4>
                    </a>
                    <button className="save-quote-btn" onClick={() => handleClick}>Save</button>
                </div>
            </section>
            <section className="quote-actions">
                <button className="new-quote-btn" onClick={newQuote}>New Quote</button>
            </section>
        </div>
     );
}
 
export default Home;