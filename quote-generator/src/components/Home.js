import './Home.css';
import ToggleHeartIcon from './ToggleHeartIcon';

const Home = ({ 
    quote,
    darkMode,
    saveAlert,
    selectedIcon,
    newQuote,
    handleSelectedIcon 
}) => {

    return ( 
        <div className={ darkMode ? "home-dark" : "home" }>
            <section className="quote-body centered">
                <h2 className="quote-text">'{quote.quote}'</h2>
                <div className="author-body">
                    <a href={quote.wiki} target="_blank" rel="noreferrer" className="author-link">
                        <img className="author-image" src={quote.image} alt="Headshot of the quote's author" />
                        <h4 className="author-name">{quote.author}</h4>
                    </a>
                    <ToggleHeartIcon 
                        selectedIcon={selectedIcon}
                        handleSelectedIcon={handleSelectedIcon}
                    />
                    <div className={ saveAlert === null ? "hide" : "save-alert" }>
                        <p className="save-notification">{saveAlert}</p>
                    </div>
                </div>
            </section>
            <section className="quote-actions">
                <button className="new-quote-btn" onClick={newQuote}>New Quote</button>
            </section>
        </div>
     );
}
 
export default Home;