import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { QuoteData } from './data/QuoteData';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MyQuotes from './components/MyQuotes';
import AnonymousUser from './images/anonymous-profile.png';

function App() {
  
  const [darkMode, setDarkMode] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [saveAlert, setSaveAlert] = useState(null)
  const [quotes, setQuotes] = useState([...QuoteData]);
  const [currentQuote, setCurrentQuote] = useState(quotes[Math.floor(Math.random() * 30)]);
  const [customQuotes, setCustomQuotes] = useState([]);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  // Shows a random quote on screen when the New Quote button is clicked
  const getNewQuote = () => {
    setCurrentQuote(quotes[Math.floor(Math.random() * 30)]);
  }

  // Changes appearance of save icon when clicked
  const handleSelectedIcon = () => {
    setSelectedIcon(!selectedIcon);
    let quoteID = currentQuote.id;
    console.log("button is working");
    setQuotes([...quotes, 
      quotes.map(quote => {
        if(quote.id === quoteID){
          quote.favourited = !quote.favourited;
        }
      }),
    ])
    addQuote();
}

  //Test function to check is key/values are being added
  const addQuote = () => {
    setCustomQuotes([...customQuotes, {
      id: quotes.length + 1,
      quote: "This is a test to check if the object will be added",
      author: "Jamie",
      custom: true,
      image: AnonymousUser,
    }])
  }

  // Shows alert on screen to let user know when a quote has been saved/unsaved.
  useEffect(() => {
    if(selectedIcon){
      setSaveAlert("Saved");
      setTimeout(() => {
        setSaveAlert(null)
      }, 1000)
    } else if(selectedIcon === false){
      setSaveAlert("Removed")
      setTimeout(() => {
        setSaveAlert(null)
      }, 1000)
    }
  }, [selectedIcon])

  useEffect(() => {
    console.log(quotes);
  }, [quotes])

  useEffect(() => {
    console.log(customQuotes);
  }, [customQuotes])

  return (
    <Router>
      <div className={darkMode ? "App dark-bg" : "App"}>
        <Navbar 
          handleDarkMode={handleDarkMode} 
          darkMode={darkMode}
        />
        <div>
          <Switch>
            <Route exact path="/">
              <Home 
                quote={currentQuote}
                darkMode={darkMode}
                selectedIcon={selectedIcon}
                saveAlert={saveAlert}
                newQuote={getNewQuote}
                handleSelectedIcon={handleSelectedIcon}
              />
            </Route>
            <Route path="/my-quotes">
              <MyQuotes 
                darkMode={darkMode}
                quotes={quotes}
                customQuotes={customQuotes}
                addQuote={addQuote}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
