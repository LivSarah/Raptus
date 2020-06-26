import React from 'react'
import './Styles/Header.scss'

function Header() {
  return (
      <div className="Header">
        <header>
            <div className="overlay">
                <div className="logo-wrapper">
                    <img className="talk-bubble" src="https://static.wixstatic.com/media/8725a4_c6fadf9d63204a61a35a9ff9ac11dcb0~mv2.png/v1/fill/w_376,h_142,al_c,q_85,usm_0.66_1.00_0.01/st%C3%B8rste_festival.webp"/>
                    <img className="logo" src="https://static.wixstatic.com/media/8725a4_50db4fc243d44457a0c0f24b35ab1836~mv2.png/v1/fill/w_600,h_231,al_c,q_85,usm_0.66_1.00_0.01/Logo%20tagline.webp"/>
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