import './MyQuotes.css';
import { useState } from 'react';

const MyQuotes = ({ 
    darkMode, 
    customQuotes,
    quotes,
}) => {

    const [activeTab, setActiveTab] = useState("custom")

    // Creates a quote card for each object within the given array
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

    const showCustomQuotes = () => {
        setActiveTab("custom");
    }

    const showSavedQuotes = () => {
        setActiveTab("saved");
    }

    return ( 
        <div className={ darkMode ? "my-quotes-dark" : "my-quotes" }>
            <nav className="tab-bar">
                <button className={ activeTab === "custom" ? "tab-btn left-tab active-tab" : "tab-btn left-tab" } onClick={showCustomQuotes}>Custom Quotes</button>
                <button className={ activeTab === "saved" ? "tab-btn right-tab active-tab" : "tab-btn right-tab" } onClick={showSavedQuotes}>Saved Quotes</button>
                <button className="add-quote-btn">Add New Quote</button>
            </nav>

            {/* Renders if Custom Quotes tab is active */}
            {activeTab === "custom" && <div className="custom-body">
                <h1 className="test">Custom tab is active</h1>
            </div>}

            {/* Renders if Saved Quotes tab is active */}
            {activeTab === "saved" && <div className="custom-body">
                <div className="my-quotes-body">
                {quoteCards}
                </div>
            </div>}
        </div>
     );
}
 
export default MyQuotes;