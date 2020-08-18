import React from 'react'
import './Hero.scss'

function Hero() {
  return (
    <header className="Hero">
        <div className="overlay">
            <img className="logo" src={require('../../Assets/Images/logo.png')} alt="raptus-logo"/>
            <img className="logo-small" src={require('../../Assets/Images/logoSmall.png')} alt="raptus-logo"/>
            <div className="information-container">
                <h2>MINIRAPTUS 12.september 2020</h2>
                <h3>Grunnet alt som skjer rundt 
                    Covid-19 vil det ikke bli avholdt 
                    vanlig Raptus i år. I stedet vil 
                    det bli Mini-Raptus på Bergen Offentlige 
                    Bibliotek 12.september 2020. Mer info kommer!</h3>
                <button>LES MER</button>
            </div>
        </div>
    </header>
  )
}

export default Hero