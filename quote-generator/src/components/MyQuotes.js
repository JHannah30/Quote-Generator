import './MyQuotes.css';

const MyQuotes = ({ 
    darkMode, 
    customQuotes,
    quotes,
}) => {

    const quoteCards = quotes.map((quote) => 
        <div className={ darkMode ? "quote-card-dark" : "quote-card" }>
            <div className="quote-card-section">
                <img className="quote-avatar" src={quote.image} alt="User avatar" />
            </div>
            <div className="quote-card-body">
                <p className="quote-card-text">{quote.quote}</p>
                <h4 className="quote-card-author">{quote.author}</h4>
            </div>
            <div className="quote-card-section">
                <button className="remove-btn">x</button>
            </div>

        </div> 
    )

    return ( 
        <div className={ darkMode ? "my-quotes-dark" : "my-quotes" }>
            <nav className="tab-bar">
                <button className="tab-btn">Saved Quotes</button>
                <button className="tab-btn">Custom Quotes</button>
                <button className="add-quote-btn">Add New Quote</button>
            </nav>
            <div className="my-quotes-body">
                {/* Render famous quotes array */}
                {quoteCards}
            </div>
        </div>
     );
}
 
export default MyQuotes;