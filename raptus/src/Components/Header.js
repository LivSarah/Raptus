import React from 'react'
import './Styles/Header.scss'

function Header() {
  return (
    <div className="Header">
        <header>
            <div className="overlay">
                <div className="logo-wrapper">
                    <img className="talk-bubble" src={require('../Assets/Images/speech-bubble.webp')} alt="raptus-logo-speech-bubble"/>
                    <img className="logo" src={require('../Assets/Images/logo.webp')} alt="raptus-logo"/>
                </div>
                <h3>MINIRAPTUS 12.september 2020</h3>
                <p>Grunnet alt som skjer rundt Covid-19 vil det ikke bli avholdt vanlig Raptus i år. I stedet vil det bli Mini-Raptus på Bergen Offentlige Bibliotek 12.september 2020. Mer info kommer!</p>
                <br/>
                <button>LES MER</button>
            </div>
        </header>
    </div>
  )
}

export default Header