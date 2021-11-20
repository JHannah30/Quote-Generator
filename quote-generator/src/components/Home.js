import './Home.css';

const Home = ({ QuoteData }) => {

    return ( 
        <div className="home">
            <section className="home-container">
                <div className="quote-action centered">
                    <button className="previous-quote">Previous Quote</button>
                </div>
                <div className="quote-body centered">
                    <h2 className="quote-text">" {QuoteData[0].quote} "</h2>
                    <div className="quote-author">
                        <img className="author-image" src={QuoteData[0].image} alt="Headshot of the quote's author" />
                        <h4 className="author-name">- {QuoteData[0].author}</h4>
                    </div>
                </div>
                <div className="quote-action centered">
                    <button className="next-quote">Next Quote</button>
                </div>
            </section>
        </div>
     );
}
 
export default Home;