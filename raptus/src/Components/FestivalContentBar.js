import React from 'react';
import './Styles/FestivalContentBar.scss';

function FestivalContentBar() {
    const gridElements = [
        {title: 'Programposter', text: "I'm a paragraph. Click here to add your own text and edit me.", svg: '../Assets/Icons/convention.svg'},
        {title: 'Cosplay', text: "Vi har både cosplaykonurranse og photoshoot for våre utkledde deltakere.", svg: '../Assets/Icons/totoro.svg'},
        {title: 'Eventyrhulen', text: "Et område for de små å leke, tegne og ha det gøy.", svg: '../Assets/Icons/fortress.svg'},
        {title: 'Signeringer', text: "Im a paragraph. Click here to add your own text and edit me.", svg: '../Assets/Icons/autograph.svg'},
        {title: 'Artists Alley', text: "I'm a paragraph. Click here to add your own text and edit me.", svg: '../Assets/Icons/famous.svg'},
        {title: 'Stands', text: "I'm a paragraph. Click here to add your own text and edit me.", svg: '../Assets/Icons/kiosk.svg'}
    ]
    
    return (
        <section className="FestivalContentBar">
            <h3>Hva skjer i løpet av helgen?</h3>
            <div className="grid">
                {gridElements.map((element) => (
                    <div className="element" key={element.title}>
                        <img className="icon" src={require(element.svg)} alt={element.title}/>
                        <h4>{element.title}</h4>
                        <p className="text">{element.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}


export default FestivalContentBar;