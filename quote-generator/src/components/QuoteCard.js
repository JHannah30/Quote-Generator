import './QuoteCard.css';
import IMG from '../images/anonymous-profile.png';

const QuoteCard = ({ 
    darkMode,
    quote,
    author,
    image,
}) => {

// const testData = {
//     quote: "I'm currently making a quote card for my quote generator application. This is a technical exercise for Amigo.",
//     author: "Jamie Hannah",
//     image: IMG,
// }

    return ( 
    <div className={ darkMode ? "quote-card-dark" : "quote-card" }>
        <div className="quote-card-section">
            <img className="quote-avatar" src={image} alt="User avatar" />
        </div>
        <div className="quote-card-body">
            <p className="quote-card-text">{quote}</p>
            <h4 className="quote-card-author">{author}</h4>
        </div>
        <div className="quote-card-section">
            <button className="remove-btn">x</button>
        </div>

    </div> 
    );
}
 
export default QuoteCard;