import './CustomQuotesTab.css';

const CustomQuotesTab = ({ 
    darkMode, 
    customQuotes, 
    showNewQuoteTab 
}) => {

    return ( 
        <>
            {customQuotes.length < 1 ? <div className={darkMode ? "custom-quotes-container-dark" : "custom-quotes-container"}><h2 className="custom-quotes-message">It looks like you haven't made any of your own quotes yet. <span className="create-quote-link" onClick={showNewQuoteTab}>Click here to create one</span>.</h2></div> : <div>{customQuotes}</div> }
        </>
     );
}
 
export default CustomQuotesTab;