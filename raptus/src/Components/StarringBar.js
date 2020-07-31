import React from 'react'
import './Styles/StarringBar.scss';
import { GuestsCollection } from '../Components/GuestsCollection';
import { Person } from '../Components/Person';
import { Link } from "react-router-dom";

function StarringBar() {

  return (
    <section className="Starring-Bar">
      <div className="starring-cloud">
        <p>Starring:</p>
        <svg viewBox='0 0 105 105'  >
          <path d='M 25,60 
                  a 20,20 1 0,0 0,40 
                  h 50 
                  a 20,20 1 0,0 0,-40 
                  a 10,10 1 0,0 -15,-10 
                  a 15,15 1 0,0 -35,10  
                  z' />
        </svg>
      </div>
      <div className="guests-grid">
        <GuestsCollection starring={true}>
          {(guests) => (
              guests.map((guest) => (
                  <Person 
                    name={guest.name} 
                    profession={guest.profession} 
                    image={guest.image} 
                    to={`/gjester/${guest.name}`} 
                    clickable={guest.clickable} 
                    key={guest.name}
                  />
              ))
          )}
        </GuestsCollection>
        <div className="view-all-guests">
          <Link to="/gjester"><img src={require('../Assets/Images/se-alle-gjester.jpg')} alt={"view-all-guests"}/></Link>
        </div>
      </div>
    </section>
  )
}

export default StarringBar