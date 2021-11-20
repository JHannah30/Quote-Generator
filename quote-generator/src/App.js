import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MyQuotes from './components/MyQuotes';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  function handleDarkMode() {
    setDarkMode(!darkMode);
    console.log("Dark mode active? " + darkMode)
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
              <Home />
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
