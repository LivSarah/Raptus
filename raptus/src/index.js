import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './index.scss';
import { Home } from './Views/Home';
import { Guests } from './Views/Guests';
import { Program } from './Views/Program';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import SponsorsBar from './Components/SponsorsBar';
import {Header} from './Components/Header';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />

      <main>
        <Switch>
          <Route path="/gjester">
            <Guests />
          </Route>

          <Route path="/program">
            <Program />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <SponsorsBar /> 

        <Contact />
      </main>

      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
