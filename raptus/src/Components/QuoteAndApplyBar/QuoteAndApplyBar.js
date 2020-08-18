import React from 'react';
import './QuoteAndApplyBar.scss';

function QuoteAndApplyBar() {
  return (
    <section className="QuoteAndApplyBar">
        <div className="quote-container">
            <div className="bubble-and-quote">
                <p className="quote">"Dette er et kjempebra sitat av en eller annen person!"</p>
                <img src={require('../../Assets/Images/speech-bubble.png')} alt="speech-bubble"/>
            </div>
            <p className="quote-owner"><b>Mike Collins</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Artist</p>
        </div>
        <div className="divider"/>
        <div className="apply-container">
            <p>SØK FRIVILLIG, INTERVJUER ELLER STAND I DAG!</p>
        </div>
    </section>
  )
}

export default QuoteAndApplyBar;