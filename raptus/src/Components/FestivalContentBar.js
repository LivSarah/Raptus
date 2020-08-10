import React from 'react';
import './Styles/FestivalContentBar.scss';
import { icons } from '../Assets/Icons/IconsCollection';

function FestivalContentBar() {
    const gridElements = [
        {title: 'Programposter', text: "I'm a paragraph. Click here to add your own text and edit me.", svg: icons.convention},
        {title: 'Cosplay', text: "Vi har både cosplaykonurranse og photoshoot for våre utkledde deltakere.", svg: icons.totoro},
        {title: 'Eventyrhulen', text: "Et område for de små å leke, tegne og ha det gøy.", svg: icons.fortress},
        {title: 'Signeringer', text: "Im a paragraph. Click here to add your own text and edit me.", svg: icons.autograph},
        {title: 'Artists Alley', text: "I'm a paragraph. Click here to add your own text and edit me.", svg: icons.famous},
        {title: 'Stands', text: "I'm a paragraph. Click here to add your own text and edit me.", svg: icons.kiosk}
    ]
    
    return (
        <section className="FestivalContentBar">
            <h3>Hva skjer i løpet av helgen?</h3>
            <div className="grid">
                {gridElements.map((element) => (
                    <div className="element" key={element.title}>
                        <img className="icon" src={element.svg} alt={element.title}/>
                        <h4>{element.title}</h4>
                        <p className="text">{element.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}


export default FestivalContentBar;