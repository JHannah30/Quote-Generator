import './MyQuotes.css';
import { useState } from 'react';
import QuoteCard from './QuoteCard';
import SavedQuotesTab from './SavedQuotesTab';
import CustomQuotesTab from './CustomQuotesTab';
import AddQuoteTab from './AddQuoteTab';

const MyQuotes = ({ 
    darkMode, 
    quotes,
    customQuotes,
    addNewQuote,
    removeEntry,
    removeFavourited
}) => {

    const [activeTab, setActiveTab] = useState("saved");

    // Takes in the customQuotes state and renders a component for each array value
    const customQuoteCards = customQuotes.map((quote) => {
        return <QuoteCard 
            darkMode={darkMode}
            id={quote.id}
            quote={quote.quote}
            author={quote.author}
            image={quote.image}
            handleClick={removeEntry}
            />
    })

    // Takes in the quotes state and renders a component for each array value
    const savedQuoteCards = quotes.map((quote) => {
        if(quote.favourited){
            return <QuoteCard 
            id={quote.id}
            darkMode={darkMode}
            quote={quote.quote}
            author={quote.author}
            image={quote.image}
            handleClick={removeFavourited}
            />
        }
    })

    const showSavedQuotesTab = () => {
        setActiveTab("saved");
    }
    
    const showCustomQuotesTab = () => {
        setActiveTab("custom");
    }

    const showNewQuoteTab = () => {
        setActiveTab("newQuote")
    }

    return ( 
        <div className={ darkMode ? "my-quotes-dark" : "my-quotes" }>
            <nav className="tab-bar">
                
                {/* Saved quotes button */}
                <button className={ activeTab === "saved" ? "tab-btn left-tab active-tab" : "tab-btn left-tab" } onClick={showSavedQuotesTab}>Saved Quotes</button>

                {/* Custom quotes button */}
                <button className={ activeTab === "custom" ? "tab-btn right-tab active-tab" : "tab-btn right-tab" } onClick={showCustomQuotesTab}>Custom Quotes</button>
                
                
                {/* Add new quote button */}
                <button className="add-quote-btn" onClick={showNewQuoteTab}>Add New Quote</button>

            </nav>
            <div className="quote-card-container">
                
                {/* Renders if Saved Quotes tab is active */}
                {activeTab === "saved" && 
                <SavedQuotesTab 
                    savedQuoteCards={savedQuoteCards} 
                />}

                {/* Renders if Custom Quotes tab is active */}
                {activeTab === "custom" && 
                <CustomQuotesTab 
                    darkMode={darkMode} 
                    customQuotes={customQuoteCards} 
                    showNewQuoteTab={showNewQuoteTab} 
                    showCustomQuotesTab={showCustomQuotesTab}
                />}
                

                {/* Renders if new quote button/link have been clicked */}
                {activeTab === "newQuote" && 
                <AddQuoteTab 
                    darkMode={darkMode}
                    addNewQuote={addNewQuote}
                    showCustomQuotesTab={showCustomQuotesTab}
                />}

            </div>
        </div>
     );
}
 
export default MyQuotes;