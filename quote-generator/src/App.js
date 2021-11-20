import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MyQuotes from './components/MyQuotes';
import { QuoteData } from './data/QuoteData';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(QuoteData[Math.floor(Math.random() * 30)]);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log("Dark mode active? " + darkMode);
  }

  const newQuote = () => {
    setCurrentQuote(QuoteData[Math.floor(Math.random() * 30)]);
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
                Quote={currentQuote}
                NewQuote={newQuote}
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
