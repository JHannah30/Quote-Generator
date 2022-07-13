import './CustomQuotesTab.css';

const CustomQuotesTab = ({ 
    darkMode, 
    customQuotes, 
    showNewQuoteTab 
}) => {

    return ( 
        <>
            {customQuotes.length < 1 ? <div className={darkMode ? "custom-quotes-container-dark" : "custom-quotes-container"}><h2 className="custom-quotes-message">It looks like you haven't made any of your own quotes yet.</h2>
            <h2 className="create-quote-link" onClick={showNewQuoteTab}>Create one?</h2></div> : <div>{customQuotes}</div> }
        </>
     );
}
 
export default CustomQuotesTab;