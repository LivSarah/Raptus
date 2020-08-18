import React from 'react'
import './StarringBar.scss';
import { GuestsCollection } from '../../Components/GuestsCollection/GuestsCollection';
import { Person } from '../../Components/Person/Person';
import { Link } from "react-router-dom";

function StarringBar() {

  return (
    <section className="Starring-Bar">
      <img src={require('../../Assets/Images/starring-cloud.png')} className="starring-cloud" alt="starring-guests" />
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
          <Link to="/gjester"><img className="view-all-guests" src={require('../../Assets/Images/se-alle-gjester.jpg')} alt={"view-all-guests"}/></Link>
        </div>
      </div>
    </section>
  )
}

export default StarringBar