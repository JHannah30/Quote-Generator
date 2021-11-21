import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MyQuotes from './components/MyQuotes';
import { QuoteData } from './data/QuoteData';

function App() {
  
  const [darkMode, setDarkMode] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(false);
  const [saveAlert, setSaveAlert] = useState(null)
  const [quotes, setQuotes] = useState({ ...QuoteData });
  const [currentQuote, setCurrentQuote] = useState(quotes[Math.floor(Math.random() * 30)]);

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
  }

  // Shows alert on screen to let user know when a quote has been saved/unsaved.
  useEffect(() => {
    if(selectedIcon){
      setSaveAlert("Saved");
      setTimeout(() => {
        setSaveAlert(null)
      }, 1200)
    } else if(!selectedIcon){
      setSaveAlert("Removed")
      setTimeout(() => {
        setSaveAlert(null)
      }, 1200)
    }
    console.log(selectedIcon);
    console.log(saveAlert);
  }, [selectedIcon])

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
              <MyQuotes />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
