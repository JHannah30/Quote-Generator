import './SavedQuotesTab.css';

const SavedQuotesTab = ({ darkMode, savedQuoteCards }) => {

    return ( 
            <div className={darkMode ? "saved-quotes-container-dark" : "saved-quotes-container"}>
                {savedQuoteCards}
            </div>
     );
}
 
export default SavedQuotesTab;