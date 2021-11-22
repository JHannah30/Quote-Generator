import './MyQuotes.css';
import { useState } from 'react';
import QuoteCard from './QuoteCard';
import SavedQuotesTab from './SavedQuotesTab';
import CustomQuotesTab from './CustomQuotesTab';
import AddQuoteTab from './AddQuoteTab';

const MyQuotes = ({ 
    darkMode, 
    customQuotes,
    quotes,
    addQuote,
    test
}) => {

    const [activeTab, setActiveTab] = useState("custom");

    // Takes in the quotes state and renders a component for each array value
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

    // Takes in the customQuotes state and renders a component for each array value
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

    const showNewQuoteTab = () => {
        setActiveTab("newQuote")
    }

    return ( 
        <div className={ darkMode ? "my-quotes-dark" : "my-quotes" }>
            <nav className="tab-bar">
                
                {/* Custom quotes button */}
                <button className={ activeTab === "custom" ? "tab-btn left-tab active-tab" : "tab-btn left-tab" } onClick={showCustomQuotes}>Custom Quotes</button>
                
                {/* Saved quotes button */}
                <button className={ activeTab === "saved" ? "tab-btn right-tab active-tab" : "tab-btn right-tab" } onClick={showSavedQuotes}>Saved Quotes</button>
                
                {/* Add new quote button */}
                <button className="add-quote-btn" onClick={showNewQuoteTab}>Add New Quote</button>

            </nav>
            <div className="quote-card-container">
                
                {/* Renders if Custom Quotes tab is active */}
                {activeTab === "custom" && 
                <CustomQuotesTab 
                    darkMode={darkMode} 
                    customQuotes={customQuoteCards} 
                    addQuote={showNewQuoteTab} 
                />}
                
                {/* Renders if Saved Quotes tab is active */}
                {activeTab === "saved" && 
                <SavedQuotesTab 
                    savedQuoteCards={savedQuoteCards} 
                />}

                {/* Renders if new quote button/link have been clicked */}
                {activeTab === "newQuote" && 
                <AddQuoteTab 
                    darkMode={darkMode}
                    test={test}
                />}

            </div>
        </div>
     );
}
 
export default MyQuotes;