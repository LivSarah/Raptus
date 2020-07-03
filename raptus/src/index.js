import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from './Components/Header';
import Contact from './Components/Contact';
import ActivitiesBar from './Components/ActivitiesBar';
import StarringBar from './Components/StarringBar';
import QuoteAndApplyBar from './Components/QuoteAndApplyBar';
import Footer from './Components/Footer';
import SponsorsBar from './Components/SponsorsBar';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <StarringBar />
    <ActivitiesBar />
    <QuoteAndApplyBar />
    <SponsorsBar />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
