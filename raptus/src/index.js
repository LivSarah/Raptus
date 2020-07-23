import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './index.scss';
import { Home } from './Views/Home'
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import SponsorsBar from './Components/SponsorsBar';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Link to="/">Hjem</Link>
      
      <Link to="/gjester">Gjester</Link>

      <Switch>
        <Route path="/gjester">
          <h1>GJESTER</h1>
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <SponsorsBar />

      <Contact />

      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
