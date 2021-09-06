import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Advise from './Components/Advise/Advise';
import Quotes from './Components/Quotes/Quotes';
import Jokes from './Components/Jokes/Jokes';
import Bored from './Components/Bored/Bored';
import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
    <>
    <Navbar />
    <div className="app">
    <Router>
    <Switch>
      <Route path="/" exact>
        <Advise />
      </Route>
      <Route path="/advise" exact>
        <Advise />
      </Route>
      <Route path="/quotes" exact>
        <Quotes />
      </Route>
      <Route path="/jokes" exact>
        <Jokes />
      </Route>
      <Route path="/bored" exact>
        <Bored />
      </Route>
    </Switch>
    </Router>
    </div>
    </>
  );
}

export default App;
