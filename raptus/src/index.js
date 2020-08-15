import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './index.scss';
import { Home } from './Views/Home';
import { Guests } from './Views/Guests';
import { Program } from './Views/Program';
import { Stands } from './Views/Stands';
import { Cosplay } from './Views/Cosplay';
import { Frivillig } from './Views/Frivillig';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import SponsorsBar from './Components/SponsorsBar';
import {Navbar} from './Components/Navbar';
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from './Components/Firebase';
import { Guest } from './Views/Guest';
import { ScrollToTop } from './Components/ScrollToTop';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <Router>
        <ScrollToTop />
        <Navbar />

          <Switch>
            <Route exact path="/gjester">
              <Guests />
            </Route>

            <Route path="/gjester/:name">
              <Guest />
            </Route>

            <Route exact path="/program">
              <Program />
            </Route>

            <Route exact path="/cosplay">
              <Cosplay />
            </Route>

            <Route exact path="/stands">
              <Stands />
            </Route>

            <Route exact path="/frivillig">
              <Frivillig />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>

          <SponsorsBar /> 

          <Contact />

        <Footer />
      </Router>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
