import './Home.css';

const Home = ({ Quote, NewQuote }) => {

    return ( 
        <div className="home">
            <section className="home-container">
                <div className="quote-action centered">
                    <button className="previous-quote">Previous Quote</button>
                </div>
                <div className="quote-body centered">
                    <h2 className="quote-text">" {Quote.quote} "</h2>
                    <div className="quote-author">
                        <img className="author-image" src={Quote.image} alt="Headshot of the quote's author" />
                        <h4 className="author-name">- {Quote.author}</h4>
                    </div>
                </div>
                <div className="quote-action centered">
                    <button className="next-quote" onClick={NewQuote}>Next Quote</button>
                </div>
            </section>
        </div>
     );
}
 
export default Home;