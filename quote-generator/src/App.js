import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MyQuotes from './components/MyQuotes';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
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
