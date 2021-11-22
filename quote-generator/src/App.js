import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { QuoteData } from './data/QuoteData';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MyQuotes from './components/MyQuotes';

function App() {
  
  const [darkMode, setDarkMode] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [saveAlert, setSaveAlert] = useState(null)
  const [quotes, setQuotes] = useState([...QuoteData]);
  const [currentQuote, setCurrentQuote] = useState(quotes[Math.floor(Math.random() * 30)]);
  const [customQuotes, setCustomQuotes] = useState([]);

  //Toggles darkmode as active/inactive
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  } 

  // Shows a random quote on screen when the New Quote button is clicked
  const getNewQuote = () => {
    setSelectedIcon(null);
    setCurrentQuote(quotes[Math.floor(Math.random() * 30)]);
  }

  // Changes appearance of saved/favourited icon when clicked
  const handleSelectedIcon = () => {
    setSelectedIcon(!selectedIcon);
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
    // Updates the value based on if the quote has been favourited or not
    let quoteID = currentQuote.id;
    for(let i = 0; i < quotes.length; i++){
        if(quotes[i].id === quoteID){
          setQuotes([...quotes,
            //----- This needs fixing. The below value is updating state, whilst adding a new array item ----//
            quotes[i].favourited = !quotes[i].favourited
          ])
        }
    }
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

  // Removed item from state array
  const removeEntry = (id) => {
    // remove from array
    console.log("Button clicked")
    console.log("ID = " + id)
  }

  // Change item from favourited to not favourited
  const removeFavourited = (n) => {
    for(let i = 0; i < quotes.length; i++){
      if(quotes[i].id === n){
        setQuotes([...quotes,
          //----- This needs fixing. The below value is updating state, whilst adding a new array item ----//
          quotes[i].favourited = !quotes[i].favourited
        ])
      }
    }
  }

  // Takes new quote form inputs and adds them 
  const addNewQuote = (newEntry) => {
      setCustomQuotes((prevQuotes) => {
          return [...prevQuotes, newEntry]
      })
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
                darkMode={darkMode}
                currentQuote={currentQuote}
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
                addNewQuote={addNewQuote}
                removeEntry={removeEntry}
                removeFavourited={removeFavourited}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
