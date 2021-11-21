import './MyQuotes.css';
import { useState } from 'react';
import QuoteCard from './QuoteCard';

const MyQuotes = ({ 
    darkMode, 
    customQuotes 
}) => {

    return ( 
        <div className={ darkMode ? "my-quotes-dark" : "my-quotes" }>
            <nav className="tab-bar">
                <button className="tab-btn">Saved Quotes</button>
                <button className="tab-btn">Custom Quotes</button>
                <button className="add-quote-btn">Add New Quote</button>
            </nav>
            <div className="my-quotes-body">
                <QuoteCard />
                <QuoteCard />
                <QuoteCard />
            </div>
        </div>
     );
}
 
export default MyQuotes;