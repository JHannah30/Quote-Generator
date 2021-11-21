import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MyQuotes from './components/MyQuotes';
import { QuoteData } from './data/QuoteData';

function App() {

  const [quotes, setQuotes] = useState({ ...QuoteData });
  const [currentQuote, setCurrentQuote] = useState(quotes[Math.floor(Math.random() * 30)]);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  const getNewQuote = () => {
    setCurrentQuote(quotes[Math.floor(Math.random() * 30)]);
  }

  const handleSelectedIcon = () => {
    setSelectedIcon(!selectedIcon);
  }

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
