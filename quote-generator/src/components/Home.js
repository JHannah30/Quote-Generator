import './Home.css';
import ToggleHeartIcon from './ToggleHeartIcon';
import ToggleSpeechIcon from './ToggleSpeechIcon';

const Home = ({ 
    currentQuote,
    darkMode,
    saveAlert,
    selectedIcon,
    newQuote,
    handleSelectedIcon,
}) => {

    return ( 
        <div className={ darkMode ? "home-dark" : "home" }>
            <section className="quote-body centered">
                <h2 className="quote-text">'{currentQuote.quote}'</h2>
                <div className="author-body">
                    <a href={currentQuote.wiki} target="_blank" rel="noreferrer" className="author-link">
                        <img className="author-image" src={currentQuote.image} alt="Headshot of the quote's author" />
                        <h4 className="author-name">{currentQuote.author}</h4>
                    </a>
                    <div className="icon-wrapper">
                        <ToggleSpeechIcon 
                            currentQuoteText={currentQuote.quote}
                        />
                        <ToggleHeartIcon 
                            quoteFavourited={currentQuote.favourited}
                            selectedIcon={selectedIcon}
                            handleSelectedIcon={handleSelectedIcon}
                        />
                    </div>
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