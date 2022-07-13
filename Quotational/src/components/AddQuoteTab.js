import './AddQuoteTab.css';
import { useState } from 'react';
import AnonymousUser from '../images/anonymous-profile.png';


const AddQuoteTab = ({ 
    darkMode, 
    addNewQuote,
    showCustomQuotesTab
}) => {

    const [newQuoteData, setNewQuoteData] = useState([]);
    const [quoteCharCount, setQuoteCharCount] = useState(0);
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNewQuoteData(values => ({...values, [name]: value}));
    }

    const handleQuoteChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setQuoteCharCount(e.target.value.length);
        setNewQuoteData(values => ({...values, [name]: value}));
    }

    // On form submission, data is saved as a new quote and passed up into App.js
    const handleSubmit = (e) => {
        e.preventDefault();
        const newQuote = {
            id: Math.floor(Math.random() * 10000),
            author: newQuoteData.author,
            quote: newQuoteData.quote,
            image: AnonymousUser,
        }
        addNewQuote(newQuote);
        setNewQuoteData([]);
        showCustomQuotesTab();
    }

    return ( 
        <div className={darkMode ? "add-quote-container-dark" : "add-quote-container"}>
            <form onSubmit={handleSubmit} className="add-quote-form">
                <label className="form-label">What's your name?</label>
                <input 
                    className="form-input-text"
                    type="text" 
                    name="author" 
                    value={newQuoteData.author} 
                    onChange={handleChange}
                />
                <label className="form-label">Give us a few words of wisdom</label>
                <textarea 
                    className="form-input-textarea"
                    name="quote"
                    maxLength="120"
                    value={newQuoteData.quote} 
                    onChange={handleQuoteChange} 
                />
                <div className="char-limit-container">
                    <p 
                        className={quoteCharCount > 109 && quoteCharCount < 120 ? "char-limit-close" : quoteCharCount === 120 ? "char-limit-max" : "char-limit"}>{quoteCharCount}/120
                    </p>
                </div>
                <input 
                    className="form-submit-btn"
                    type="submit"
                />
            </form>
        </div>
     );
}
 
export default AddQuoteTab;