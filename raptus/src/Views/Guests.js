import React from "react";
import './Guests.scss';
import { GuestsCollection } from '../Components/GuestsCollection';
import { Person } from '../Components/Person'

export const Guests = () => (
    <section className="Guests">
        <header>
            <h4>Årets</h4>
            <h1>GJESTER</h1>
        </header>

        <div className="guests-grid">
            <GuestsCollection>
              {(guests) => (
                  guests.map((guest) => (
                      <Person 
                        name={guest.name} 
                        profession={guest.profession} 
                        image={guest.image} href="/" 
                        clickable={guest.clickable} 
                        key={guest.name}
                      />
                ))
              )}
            </GuestsCollection>
        </div>
    </section>
);
