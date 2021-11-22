import './MyQuotes.css';
import { useState } from 'react';
import QuoteCard from './QuoteCard';
import SavedQuotesTab from './SavedQuotesTab';
import CustomQuotesTab from './CustomQuotesTab';

const MyQuotes = ({ 
    darkMode, 
    customQuotes,
    quotes,
    addQuote,
}) => {

    const [activeTab, setActiveTab] = useState("custom");

    const savedQuoteCards = quotes.map((quote) => {
        if(quote.favourited){
            return <QuoteCard 
            darkMode={darkMode}
            quote={quote.quote}
            author={quote.author}
            image={quote.image}
            />
        }
    })

    const customQuoteCards = customQuotes.map((quote) => {
        return <QuoteCard 
            darkMode={darkMode}
            quote={quote.quote}
            author={quote.author}
            image={quote.image}
            />
    })

    const showCustomQuotes = () => {
        setActiveTab("custom");
    }

    const showSavedQuotes = () => {
        setActiveTab("saved");
    }

    return ( 
        <div className={ darkMode ? "my-quotes-dark" : "my-quotes" }>
            <nav className="tab-bar">
                
                {/* Custom quotes button */}
                <button className={ activeTab === "custom" ? "tab-btn left-tab active-tab" : "tab-btn left-tab" } onClick={showCustomQuotes}>Custom Quotes</button>
                
                {/* Saved quotes button */}
                <button className={ activeTab === "saved" ? "tab-btn right-tab active-tab" : "tab-btn right-tab" } onClick={showSavedQuotes}>Saved Quotes</button>
                
                {/* Add new quote button */}
                <button className="add-quote-btn" onClick={addQuote}>Add New Quote</button>

            </nav>
            <div className="quote-card-container">
                
                {/* Renders if Custom Quotes tab is active */}
                {activeTab === "custom" && 
                <CustomQuotesTab 
                    darkMode={darkMode} 
                    customQuotes={customQuoteCards} 
                    addQuote={addQuote} 
                />}
                
                {/* Renders if Saved Quotes tab is active */}
                {activeTab === "saved" && 
                <SavedQuotesTab 
                    savedQuoteCards={savedQuoteCards} 
                />}

            </div>
        </div>
     );
}
 
export default MyQuotes;