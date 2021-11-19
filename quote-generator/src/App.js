import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MyQuotes from './components/MyQuotes';

function App() {

  const [toggleDark, setToggleDark] = useState(false);

  function handleDarkMode() {
    setToggleDark(!toggleDark);
    console.log("Dark mode active? " + toggleDark)
  }

  return (
    <Router>
      <div className="App">
        <Navbar 
          handleDarkMode={handleDarkMode} 
          toggleDark={toggleDark}
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
