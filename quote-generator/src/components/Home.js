import './Home.css';
import ProfileImage from '../images/anonymous-profile.png';

const Home = () => {
    return ( 
        <div className="home">
            <section className="home-container">
                <div className="quote-action centered">
                    <button className="previous-quote"></button>
                </div>
                <div className="quote-body centered">
                    <h2 className="quote-text">"This is the quote"</h2>
                    <div className="quote-author">
                        <img className="author-image" src={ProfileImage} alt="Headshot of the quote's author" />
                        <h4 className="author-name">~ Joe Bloggs</h4>
                    </div>
                </div>
                <div className="quote-action centered">
                    <button className="next-quote"></button>
                </div>
            </section>
        </div>
     );
}
 
export default Home;