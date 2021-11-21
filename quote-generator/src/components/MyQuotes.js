import './MyQuotes.css';
import { useState } from 'react';
import QuoteCard from './QuoteCard';

const MyQuotes = ({ 
    darkMode, 
    customQuotes,
    quotes,
}) => {

    return ( 
        <div className={ darkMode ? "my-quotes-dark" : "my-quotes" }>
            <nav className="tab-bar">
                <button className="tab-btn">Saved Quotes</button>
                <button className="tab-btn">Custom Quotes</button>
                <button className="add-quote-btn">Add New Quote</button>
            </nav>
            <div className="my-quotes-body">
                {/* Render famous quotes array */}
                {quotes.map((quote) => (
                    <QuoteCard 
                    darkMode={darkMode} 
                    quotes={quotes}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default MyQuotes;