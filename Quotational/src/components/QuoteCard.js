import './QuoteCard.css';

const QuoteCard = ({ 
    darkMode,
    id,
    quote,
    author,
    image,
    handleClick
}) => {

    return ( 
        <div key={id} className={ darkMode ? "quote-card-dark" : "quote-card" }>
            <div className="card-avatar-section">
                <img className="quote-avatar" src={image} alt="User avatar" />
            </div>
            <div className="card-body-section">
                <p className="quote-card-text">{quote}</p>
                <h4 className="quote-card-author">{author}</h4>
            </div>
            <div className="card-remove-section">
                <button onClick={() => handleClick(id)} className="remove-btn">x</button>
            </div>
        </div> 
    );
}
 
export default QuoteCard;