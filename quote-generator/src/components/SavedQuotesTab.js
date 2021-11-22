import './SavedQuotesTab.css';

const SavedQuotesTab = ({ darkMode, savedQuoteCards }) => {

    console.log(savedQuoteCards[0]);

    return ( 
            <>
                <div >
                    {savedQuoteCards}
                </div>
            </>
     );
}
 
export default SavedQuotesTab;